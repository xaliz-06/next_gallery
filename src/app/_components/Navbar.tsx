import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { SimpleUploadButton } from "./simple-upload-button";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-2">
      <div className="px-4 py-2">
        <h1 className="text-3xl font-semibold">My Food Gallery</h1>
      </div>
      <div className="px-4 py-2">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <div className="flex items-center justify-between gap-8">
            <SimpleUploadButton />
            <UserButton />
            <SignOutButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
