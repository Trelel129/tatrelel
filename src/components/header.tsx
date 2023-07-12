import Image from "next/image"

export default function Header() {
    return(
        <div className="flex px-20 py-3 bg-second-blue gap-5">
            <Image src="assets/icons/siphalal-logo.svg" width="50" height="50" alt="logo-siphalal"/>
            <h2 className="text-black text-lg font-bold">SIPHALAL</h2>
        </div>
    )
    
}