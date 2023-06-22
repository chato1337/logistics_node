import express from "express";
import { customerRoutes } from "./customer/router";
import { deliveryRoutes } from "./delivery/router";
import { packageRoutes } from "./package/router";


export function routerApi(app: express.Application) {
    const router = express.Router()
    app.use('/api/v1/', router)
    router.use('/customer', customerRoutes)
    router.use('/delivery', deliveryRoutes)
    router.use('/package', packageRoutes)
}