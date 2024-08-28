import {test,expect} from '@playwright/test'
import { baseUrl } from './data'

  test('Api testing', async ({request}) =>{
   const response = await request.get('https://reqres.in/api/users/2')
   expect(response.status()).toBe(200)
  })
