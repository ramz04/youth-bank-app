import { RedirectToSignIn, SignedOut } from "@clerk/nextjs"
export default function Home() {
  return (
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  )
}
