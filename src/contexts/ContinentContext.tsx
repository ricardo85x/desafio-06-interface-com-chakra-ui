import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { api } from "../services/api"
import { ContinentProps, ContinentsProps } from "../pages/continent/[id]"

interface ImageProps {
    url: string;
    description: string;
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

            // console.log("D111")

            const continentsRequest = await api.get<ContinentsProps>("continents")


            // console.log("D111 2")


            const { data } = continentsRequest

            let tempContinets = await Promise.all(data.continents.map(async (continent): Promise<ContinentProps> => {
                
                const image = await api.get<ImageProps>("/unsplash", { params: { continent: continent.name } })
                const newContinent = {
                    ...continent,
                //    description: image.data.description === "" ? continent.description : image.data.description,
                    image: image.data.url.indexOf("unsplash") === -1 ? continent.image : image.data.url 
                }

                // await Promise.resolve( resolve => setTimeout(resolve, 1000))

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