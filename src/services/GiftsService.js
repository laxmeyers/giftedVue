import { logger } from "../utils/Logger"
import { sandBoxApi } from "./AxiosService"
import { AppState } from "../AppState"
import {Gift} from '../models/Gift'

class GiftsService{
    async getGifts() {
        const res = await sandBoxApi.get('gifts')
        logger.log(res.data)
        AppState.gifts = res.data.map(g => new Gift(g))
    }
}

export const giftsService = new GiftsService()