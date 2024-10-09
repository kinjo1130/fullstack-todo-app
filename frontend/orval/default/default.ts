/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Todos API
 * The Todos API description
 * OpenAPI spec version: 0.1
 */
import useSwr from 'swr'
import type {
  Key,
  SWRConfiguration
} from 'swr'


  
  export type appControllerGetHelloResponse = {
  data: void;
  status: number;
}

export const getAppControllerGetHelloUrl = () => {


  return `http://localhost:8080/`
}

export const appControllerGetHello = async ( options?: RequestInit): Promise<appControllerGetHelloResponse> => {
  
  const res = await fetch(getAppControllerGetHelloUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data }
}




export const getAppControllerGetHelloKey = () => [`http://localhost:8080/`] as const;

export type AppControllerGetHelloQueryResult = NonNullable<Awaited<ReturnType<typeof appControllerGetHello>>>
export type AppControllerGetHelloQueryError = Promise<unknown>

export const useAppControllerGetHello = <TError = Promise<unknown>>(
   options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof appControllerGetHello>>, TError> & { swrKey?: Key, enabled?: boolean }, fetch?: RequestInit }
) => {
  const {swr: swrOptions, fetch: fetchOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAppControllerGetHelloKey() : null);
  const swrFn = () => appControllerGetHello(fetchOptions)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
