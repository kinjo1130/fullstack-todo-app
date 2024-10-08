/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Todos API
 * The Todos API description
 * OpenAPI spec version: 0.1
 */
import {
  faker
} from '@faker-js/faker'
import {
  HttpResponse,
  delay,
  http
} from 'msw'
import type {
  TodoDto
} from '.././schemas'

export const getTodoControllerFindAllResponseMock = (): TodoDto[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({completed: faker.datatype.boolean(), createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.word.sample(), title: faker.word.sample(), updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`})))

export const getTodoControllerCreateResponseMock = (overrideResponse: Partial< TodoDto > = {}): TodoDto => ({completed: faker.datatype.boolean(), createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.word.sample(), title: faker.word.sample(), updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`, ...overrideResponse})

export const getTodoControllerUpdateResponseMock = (overrideResponse: Partial< TodoDto > = {}): TodoDto => ({completed: faker.datatype.boolean(), createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.word.sample(), title: faker.word.sample(), updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`, ...overrideResponse})

export const getTodoControllerDeleteResponseMock = (overrideResponse: Partial< TodoDto > = {}): TodoDto => ({completed: faker.datatype.boolean(), createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.word.sample(), title: faker.word.sample(), updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`, ...overrideResponse})


export const getTodoControllerFindAllMockHandler = (overrideResponse?: TodoDto[] | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<TodoDto[]> | TodoDto[])) => {
  return http.get('*/todos', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getTodoControllerFindAllResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getTodoControllerCreateMockHandler = (overrideResponse?: TodoDto | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<TodoDto> | TodoDto)) => {
  return http.post('*/todos/create', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getTodoControllerCreateResponseMock()),
      { status: 201,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getTodoControllerUpdateMockHandler = (overrideResponse?: TodoDto | ((info: Parameters<Parameters<typeof http.put>[1]>[0]) => Promise<TodoDto> | TodoDto)) => {
  return http.put('*/todos/update', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getTodoControllerUpdateResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getTodoControllerDeleteMockHandler = (overrideResponse?: TodoDto | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<TodoDto> | TodoDto)) => {
  return http.post('*/todos/delete', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getTodoControllerDeleteResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}
export const getTodosMock = () => [
  getTodoControllerFindAllMockHandler(),
  getTodoControllerCreateMockHandler(),
  getTodoControllerUpdateMockHandler(),
  getTodoControllerDeleteMockHandler()
]
