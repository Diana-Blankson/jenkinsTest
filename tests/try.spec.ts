import {test,expect} from '@playwright/test'
import { baseUrl } from './data'

test.describe("Api testing", ()=>{
    test("test", async({request}) =>{
        const response = await request.get(`${baseUrl.URL}api/users/2`)
        const responsebody = JSON.parse(await response.text())
        
        expect(response.status()).toBe(200)
        expect(responsebody.data.id).toBe(2)
        expect(responsebody.data.first_name).toBe('Janet')
        expect(responsebody.data.last_name).toBe('Weaver')
    })
}) 