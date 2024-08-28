import {test,expect} from '@playwright/test'
import { baseUrl } from './data'

test.describe("Api testing", ()=>{
  test('please', async ({request}) =>{
   const response = await request.get('https://reqres.in/api/users/2')
   expect(response.status()).toBe(200)
  })
}) 