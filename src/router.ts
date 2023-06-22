import express from "express";
import router from "./customer/router";
import { deliveryRoutes } from "./delivery/router";
import { packageRoutes } from "./package/router";


const customerRouter = router

export function routerApi(app: any) {
    const appRouter = express.Router()
    app.use('api/v1/', appRouter)
    appRouter.use('/customer', customerRouter)
    appRouter.use('/delivery', deliveryRoutes)
    appRouter.use('/package', packageRoutes)
}