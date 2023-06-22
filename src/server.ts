import { createServer } from "./config/express"
import { routerApi } from "./router"

const app = createServer()
const PORT = process.env.PORT || 4001

routerApi(app)

app.listen(PORT, () => console.log("Server Running on Port " + PORT))