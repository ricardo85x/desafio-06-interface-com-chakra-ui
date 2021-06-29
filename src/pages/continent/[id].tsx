import { Header } from "../../components/Header";
import React, { useEffect, useState } from "react";
import { Flex, HStack, Text, Spinner } from "@chakra-ui/react";
import { Banner } from "../../components/Continent/Banner"
import { Info } from "../../components/Continent/Info";
import { Bio } from "../../components/Continent/Bio"
import { useContinent } from "../../contexts/ContinentContext";
import { useRouter } from 'next/router'
import { City100 } from "../../components/Continent/City100";

import { query as q } from 'faunadb'
import { fauna } from '../../services/fauna';
import { UnsplashImage } from "../../pages/api/unsplash"
import { GetStaticPaths, GetStaticProps } from "next";


export interface ContinentsProps {
  continents: ContinentProps[]
}

export interface RankProps {
  rank: string;
  city: string;
  country: string;
  continent: string;
  city_banner: string;
}

export interface RankDataProps {
  rank: { rank: RankProps[] }
}

export interface ContinentProps {
  id: number;
  name: string;
  description: string;
  image: string;
  info: {
    countries: string;
    languages: string;
    city100: RankProps[]
  }
  bio: string;


}
interface ContinentStaticProps {
  loadedCities: UnsplashImage[]
}

export default function Continent({ loadedCities }: ContinentStaticProps) {

  const { continents, loading, updateContext } = useContinent()

  const [continent, setContinent] = useState<ContinentProps>()

  const router = useRouter()
  const { id } = router.query

  const updatedContinentWithTop100Banner = (_continents: ContinentProps[]) => {
    return _continents.map(r => {
      return { 
        ...r,  
        info: {
          ...r.info, 
          city100: loadedCities.find(i => i.continent === r.name) ? 
          [...r.info.city100.map(c100 => {
            const _banner = loadedCities.find(i => i.continent === r.name && i.name == c100.city)
            return {
              ...c100,
              city_banner: _banner ? _banner.url.regular : c100.city_banner               
            }
          })
          ] : r.info.city100
        } 
      }
    }).find(c => c.id === Number(id))
  }

  useEffect(() => {

    const readContinent = async () => {
      if (continents.length == 0 && loading == false) {

        const response = await updateContext()

        setContinent(updatedContinentWithTop100Banner(response))

      } else {
      
        setContinent(updatedContinentWithTop100Banner(continents))

      }
    }

    readContinent()

  }, [])

  return (
    <>
      <Header hasBackButton />

      {continent ? (

        <>
          <Banner continent={continent} />

          <HStack
            spacing="70px"
            width="100%"
            maxWidth={1160}
            mx="auto"
            py="20"
            px="3"
          >
            <Bio continent={continent} />
            <Info continent={continent} />
          </HStack>

          <City100 continent={continent} />

        </>
      ) : (
        <HStack spacing="2"
          align="center"
          justify="center"
        >

          <Text fontSize="48">Carregando...</Text>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="yellow.500"
            size="lg"
          />

        </HStack>
      )

      }

    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [1,2,3,4,5,6].map( path => {
      return {
        params: {
            id: path.toString()
        }
    }
    }),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (props) => {

  const { params: { id: local_id } } = props

  const defaultValue: UnsplashImage[] = []

  try {

    const continent = await fauna.query(
      q.Get(
        q.Match(q.Index(`continent_by_local_id`), local_id)
      )
    )

    const { data: { name: continent_name } } = continent as { data: { name: string } }

    const images = await fauna.query<{
      data: {
        data: UnsplashImage
      }[]
    }>(
      q.Map(
        q.Paginate(
          q.Intersection([
            q.Match(q.Index("city_by_continent"), continent_name),
            q.Match(q.Index(`city_is_online`), 1)
          ])
        ),
        q.Lambda("X", q.Get(q.Var("X")))
      )
    )

    const loadedCities = images.data.map(item => {
      return item.data
    })

    return {
      props: {
        loadedCities
      },
      revalidate: 60 * 10 // 10 min
    }


  } catch (err) {
    // IMAGE not FOUND
    //  console.log("error on faunadb", err)
  }


  return {
    props: {
      loadedCities: defaultValue
    },
    revalidate: 60 * 10 // 10 min
  }
}
