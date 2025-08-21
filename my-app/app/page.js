import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>Mini Bio</h1>
      <br></br>
      <figure>
        <img 
        src="https://scontent.frec3-1.fna.fbcdn.net/v/t39.30808-6/484899712_3024844144350191_5959979759299013874_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGKKrqF9rXPOt0p_HihmDEtAvp975Hp7R0C-n3vkentHffYvB9Eyz_EmpZ598p5QTD8AJZ44j87fnlkMoWwqahf&_nc_ohc=E2IzCE5LsnkQ7kNvwGvtYJJ&_nc_oc=Adlgtm44jeusL8CchZf2gmxxr2XfFNMfgQRtaiP760buACfAu8haHZd3pXqLCK_eaySriPvHAnkoFmT9nX52rZhe&_nc_zt=23&_nc_ht=scontent.frec3-1.fna&_nc_gid=GLbDMTiAEjTfFiH7N_dIoQ&oh=00_AfX87oq8NAwsq4_CV6Px2ViVV_rqSSppzQ54N3nvAAvuCQ&oe=68AD38C4"
        alt="Guilherme Serretti"
        width="300"
      />
      <figcaption>Guilherme Serretti</figcaption>  
      </figure>
      <br></br>  
      <h2>Tenho 21 anos, sou estudante de Ciência da Computação na UNICAP.<br></br>No meu tempo livre, gosto de assistir futebol e jogar Counter-Strike.<br></br>Messi!</h2>
      
    </div>
  );
}
