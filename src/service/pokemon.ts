import axios from 'axios'
import { getJapaneseValue } from '@/service/utils'

const POKEMON_URL = import.meta.env.VITE_POKEMON_URL

// 「タイプ」を取得する関数
const fetchTypes = async (id: string, _pokemon?: Pokemon): Promise<string[] | undefined> => {
  const types: string[] = []
  try {
    const pokemon = _pokemon ? _pokemon : await self.fetchPokemon(id)
    if (!pokemon) return undefined
    const urls: string[] = pokemon.types.map((data) => data.type.url)
    // Promise.allで全ての非同期処理が完了するまで待つ
    const typePromises = urls.map(async (url) => {
      const response: FetchType = await axios.get(url)
      const names: Type = response.data.names
      const type = getJapaneseValue(names)
      if (type) {
        types.push(type)
      }
    })
    await Promise.all(typePromises)
    if (types.length === 0) return undefined
    return types
  } catch {
    return undefined
  }
}

// 「特性」を取得する関数
const fetchAbilities = async (id: string, _pokemon?: Pokemon): Promise<string[] | undefined> => {
  const abilities: string[] = []
  try {
    const pokemon = _pokemon ? _pokemon : await self.fetchPokemon(id)
    if (!pokemon) return undefined
    const urls: string[] = pokemon.abilities.map((item) => item.ability.url)
    // Promise.allで全ての非同期処理が完了するまで待つ
    const abilityPromises = urls.map(async (url) => {
      const response: FetchType = await axios.get(url)
      const names: Type = response.data.names
      const ability = getJapaneseValue(names)
      if (ability) {
        abilities.push(ability)
      }
    })
    await Promise.all(abilityPromises)
    if (abilities.length === 0) return undefined
    return abilities
  } catch {
    return undefined
  }
}

// 「画像」を取得する関数
const fetchImage = async (id: string, _pokemon?: Pokemon): Promise<string | undefined> => {
  let image
  try {
    const pokemon = _pokemon ? _pokemon : await self.fetchPokemon(id)
    if (!pokemon) return undefined
    image = pokemon.sprites.other['official-artwork'].front_default
  } catch {
    image = undefined
  }
  return image
}

// ポケモンの基本情報(英語)を取得する関数
const fetchPokemon = async (id: string): Promise<Pokemon | undefined> => {
  let pokemon
  try {
    pokemon = (await axios.get(`${POKEMON_URL}/${id}`)).data
  } catch {
    pokemon = undefined
  }
  return pokemon
}

// 別モジュールにすべきかも（https://makky12.hatenablog.com/entry/2021/02/08/120500）
const self = {
  fetchPokemon,
}

// ポケモンの概要リスト(英語)を20件取得する関数
const fetchPokemonList = async (
  _nextUrl?: string,
): Promise<{ pokemonList: PokemonList; nextUrl: string } | undefined> => {
  let result
  try {
    const response: PokemonListData = _nextUrl
      ? (await axios.get(_nextUrl)).data
      : (await axios.get(POKEMON_URL)).data
    console.log(POKEMON_URL)

    result = {
      pokemonList: response.results,
      nextUrl: response.next,
    }
  } catch {
    result = undefined
  }
  return result
}

export { fetchTypes, fetchAbilities, fetchImage, self, fetchPokemonList }
