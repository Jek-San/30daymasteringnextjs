import Link from "next/link"
import { FC } from "react"

interface NotFoundPageProp {}

const NotFoundPage: FC<NotFoundPageProp> = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The requested page could not be found.</p>
      <Link href="/">
        <div>Go back to the home page</div>
      </Link>
    </div>
  )
}
export default NotFoundPage
