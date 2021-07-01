import { createContext, ReactNode, useCallback, useContext, useState } from "react";

import { api } from "../services/api"

import { ContinentProps, ContinentsProps,RankDataProps } from "../pages/continent/[id]"

export interface ImageProps {
    url: string;
    description: string;
    owner: string;
}

interface ContextProviderProps {
    children: ReactNode;
}

interface ContextDataProps {
    continents: ContinentProps[];
    loading: boolean;
    updateContext: () => Promise<ContinentProps[]>
}

const ContinentContext = createContext({
    continents: [] as ContinentProps[],
    loading: false,
    updateContext: () => { }
} as ContextDataProps )

export function ContextProvider({ children }: ContextProviderProps) {

    const loadContinent = async (): Promise<ContinentProps[]> => {
        try {

            const continentsRequest = await api.get<ContinentsProps>("continents")
            
            const rankRequest = await api.get<RankDataProps>("rank")

            const { data } = continentsRequest
            const { data: { rank }} = rankRequest

            let tempContinets = await Promise.all(data.continents.map(async (continent): Promise<ContinentProps> => {
                
                const image = await api.get<ImageProps>("/unsplash", { 
                    params: { 
                        queryText:continent.name, 
                        name: continent.name, 
                        type: "continent", 
                        local_id: continent.id
                    } 
                })
                
                const newContinent = {
                    ...continent,
                    image: image.data.url.indexOf("unsplash") === -1 ? continent.image : image.data.url,
                    banner_owner: image.data.url.indexOf("unsplash") === -1 ? continent.banner_owner : image.data.owner,
                }
                

                newContinent.info.city100 = rank.rank.filter(
                    r => r.continent == continent.name
                ).map(r =>  {
                    return {...r, city_banner: "", city_banner_owner: ""}
                })
   
                return newContinent

            }))

            return tempContinets

        } catch (err) {
            console.log("err 1", err)
        }
        let responsex: ContinentProps[] = []

        return responsex
    }

    const [continents, setValue] = useState<ContinentProps[]>([]);
    const [loading, setLoading] = useState(false);

    const handleUpdateContext = useCallback(async () => {
        setLoading(true);

        const continents = await loadContinent()
        setValue(continents)
        setLoading(false);

        return continents
    }, [])

    const context = {
        continents,
        loading,
        updateContext: () => handleUpdateContext(),
    } as ContextDataProps;

    return (
        <ContinentContext.Provider value={context}>
            {children}
        </ContinentContext.Provider>
    )
}

export const useContinent = () => useContext(ContinentContext)