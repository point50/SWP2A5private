import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner () {
    return (
        <div className = {styles.banner}>
            <Image src = {"/img/banner.png"}
            alt = 'cover'
            fill = {true}
            objectFit="cover"/>
            <div className = {styles.bannerText}>
                <h1 className="text-center font-[Verdana] text-[24pt] font-bold">where every event finds its venue</h1>
                <h3 className="text-center font-[Verdana] text-[18pt]" >description</h3>
            </div>
        </div>
    );
}