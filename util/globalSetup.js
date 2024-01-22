import { FullConfig } from '@playwright/test'
import dotenv from 'dotenv'

async function globalSetup(config) {
    let testEnv = 'dev'

    if (process.env.test_env) {
        testEnv = process.env.test_env
    }

    dotenv.config({
        path: `.env.${testEnv}`,
    })
}

export default globalSetup
