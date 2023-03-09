import { Footer } from "../../components/Footer";
import NavbarLogged from "../../components/NavbarLogged";
import { useEffect, useContext, useState } from "react";
import {
  ProfileContent,
  ProfileHeader,
  ContentTitleStyled,
  ButtonLoginStyled,
  DescriptionProfile,
  ButtonCreateAnnouncement,
  BackgroundHeaderStyled,
  BackPageStyled,
} from "./style";
import CreateProductModal from "../../components/CreateProductModal";
import { CaroselTitle } from "../Home/style";
import CarouselAdmin from "../../components/CarouselAdmin";
import { AuthContext } from "../../context/AuthContext";
import { userInitials } from "../../utils/userInitials";
import { productAuction } from "../../utils/auctionProducts";
import { DivContainer } from "../Home/style";
import CardAuction from "../../components/CardAuction";
import api from "../../services/api";
import CarouselProducts from "../../components/CarouselProducts";
import { Navigate, useNavigate } from "react-router";

// const products = [
//   {
//     id: 1,
//     name: "Gol",
//     description: "Carro bom, um clássico!",
//     km: 25.0,
//     year: 1996,
//     coverImage:
//       "https://cdn.wheel-size.com/automobile/body/volkswagen-gol-1995-1999-1486457284.69.jpeg",
//     price: 5.0,
//     type: "car",
//     user: {
//       id: 1,
//       fullName: "Erica Lopes",
//       description: "vendedora de carros",
//       cellPhone: "1499819373",
//     },
//   },
//   {
//     id: 2,
//     name: "Golf",
//     description: "um clássico!",
//     km: 25.0,
//     year: 1996,
//     coverImage: "https://heycar.com.br/images/2018/Maio/Golf-1995.jpg",
//     price: 5.0,
//     type: "car",
//     user: {
//       id: 1,
//       fullName: "Erica Lopes",
//       description: "vendedora de carros",
//       cellPhone: "1499819373",
//     },
//   },
//   {
//     id: 3,
//     name: "GS-500",
//     description: "um clássico!",
//     km: 25.0,
//     year: 1996,
//     coverImage:
//       "https://p.turbosquid.com/ts-thumb/q0/BbBmqk/8l7xTpeD/0/jpg/1401122241/1920x1080/fit_q99/7e1bce7e8a8ba1335ab81feb068745a1dbef763f/0.jpg",
//     price: 5.0,
//     type: "motorcycle",
//     user: {
//       id: 1,
//       fullName: "Erica Lopes",
//       description: "vendedora de carros",
//       cellPhone: "1499819373",
//     },
//   },
//   {
//     id: 4,
//     name: "Kawasaki Ninja",
//     description: "um clássico!",
//     km: 25.0,
//     year: 1996,
//     coverImage:
//       "https://kawasaki-global-admin.com/ContentStorage/KMB/Products/5489/c7122247-9d3e-4574-ba23-f59cf841833f.png?w=767",
//     price: 5.0,
//     type: "motorcycle",
//     user: {
//       id: 1,
//       fullName: "Erica Lopes",
//       description: "vendedora de carros",
//       cellPhone: "1499819373",
//     },
//   },
//   {
//     id: 5,
//     name: "Kawasaki Ninja",
//     description: "um clássico!",
//     km: 25.0,
//     year: 1996,
//     coverImage:
//       "https://kawasaki-global-admin.com/ContentStorage/KMB/Products/5489/c7122247-9d3e-4574-ba23-f59cf841833f.png?w=767",
//     price: 5.0,
//     type: "motorcycle",
//     user: {
//       id: 1,
//       fullName: "Erica Lopes",
//       description: "vendedora de carros",
//       cellPhone: "1499819373",
//     },
//   },
//   {
//     id: 6,
//     name: "Kawasaki Ninja",
//     description: "um clássico!",
//     km: 25.0,
//     year: 1996,
//     coverImage:
//       "https://kawasaki-global-admin.com/ContentStorage/KMB/Products/5489/c7122247-9d3e-4574-ba23-f59cf841833f.png?w=767",
//     price: 5.0,
//     type: "motorcycle",
//     user: {
//       id: 1,
//       fullName: "Erica Lopes",
//       description: "vendedora de carros",
//       cellPhone: "1499819373",
//     },
//   },
//   {
//     id: 7,
//     name: "Kawasaki Ninja",
//     description: "um clássico!",
//     km: 25.0,
//     year: 1996,
//     coverImage:
//       "https://kawasaki-global-admin.com/ContentStorage/KMB/Products/5489/c7122247-9d3e-4574-ba23-f59cf841833f.png?w=767",
//     price: 5.0,
//     type: "motorcycle",
//     user: {
//       id: 1,
//       fullName: "Erica Lopes",
//       description: "vendedora de carros",
//       cellPhone: "1499819373",
//     },
//   },
//   {
//     id: 8,
//     name: "Gol",
//     description: "Carro bom, um clássico!",
//     km: 25.0,
//     year: 1996,
//     coverImage:
//       "https://cdn.wheel-size.com/automobile/body/volkswagen-gol-1995-1999-1486457284.69.jpeg",
//     price: 5.0,
//     type: "car",
//     user: {
//       id: 1,
//       fullName: "Erica Lopes",
//       description: "vendedora de carros",
//       cellPhone: "1499819373",
//     },
//   },
//   {
//     id: 9,
//     name: "Gol",
//     description: "Carro bom, um clássico!",
//     km: 25.0,
//     year: 1996,
//     coverImage:
//       "https://cdn.wheel-size.com/automobile/body/volkswagen-gol-1995-1999-1486457284.69.jpeg",
//     price: 5.0,
//     type: "car",
//     user: {
//       id: 1,
//       fullName: "Erica Lopes",
//       description: "vendedora de carros",
//       cellPhone: "1499819373",
//     },
//   },
//   {
//     id: 10,
//     name: "Gol",
//     description: "Carro bom, um clássico!",
//     km: 25.0,
//     year: 1996,
//     coverImage:
//       "https://cdn.wheel-size.com/automobile/body/volkswagen-gol-1995-1999-1486457284.69.jpeg",
//     price: 5.0,
//     type: "car",
//     user: {
//       id: 1,
//       fullName: "Erica Lopes",
//       description: "vendedora de carros",
//       cellPhone: "1499819373",
//     },
//   },
// ];

function ProfileViewAdmin() {
  const { user } = useContext(AuthContext);
  const [showCreateProductModal, setShowCreateProductModal] = useState(false);

  const [products, setProducts] = useState<any>([]);
  const [productsCar, setProductsCar] = useState<any>([]);
  const [productsBike, setProductsBike] = useState<any>([]);

  const token = localStorage.getItem("@motorsShop:token");

  const navigate = useNavigate();
  if (!token) {
    navigate(`/home`);
  }

  useEffect(() => {
    api
      .get(`vehicles/`)
      .then((res) => {
        const data = res.data;
        setProducts(data);
        const cars = data.filter(
          (element: any) => element?.type_veihcle === "car"
        );
        const bike = data.filter(
          (element: any) => element?.type_veihcle === "motorhicle"
        );
        setProductsCar(cars);
        setProductsBike(bike);
      })
      .catch((err) => console.log("Tente novamente mais tarde."));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BackPageStyled>
      {showCreateProductModal && (
        <CreateProductModal
          setShowCreateProductModal={setShowCreateProductModal}
        />
      )}
      <NavbarLogged />

      <BackgroundHeaderStyled className="background"></BackgroundHeaderStyled>

      <ProfileHeader>
        <ProfileContent>
          <ButtonLoginStyled>{userInitials(user.fullName)}</ButtonLoginStyled>
          <ContentTitleStyled>
            {user && <p>{user.fullName}</p>}
            <small>{user.isSeller ? "Anunciante" : "Comprador"}</small>
          </ContentTitleStyled>

          <DescriptionProfile>{user.description}</DescriptionProfile>

          <ButtonCreateAnnouncement
            onClick={() => setShowCreateProductModal(true)}
          >
            Criar Anúncio
          </ButtonCreateAnnouncement>
        </ProfileContent>
      </ProfileHeader>

      <CaroselTitle>Leilão</CaroselTitle>
      <DivContainer>
        <CardAuction product={productAuction} />
        <CardAuction product={productAuction} />
        <CardAuction product={productAuction} />
      </DivContainer>

      {/* <CaroselTitle id="cars">Carros</CaroselTitle>
      <CarouselProducts props={"car"} arr={products} />
      <CaroselTitle id="motorhicle">Motos</CaroselTitle>
      <CarouselProducts props={"motorhicle"} arr={products} /> */}

      {products.length > 0 && (
        <>
          <CaroselTitle id="cars">Carros</CaroselTitle>
          <CarouselAdmin props={"car"} products={productsCar} />
          <CaroselTitle id="motorhicle">Motos</CaroselTitle>
          <CarouselAdmin props={"motorhicle"} products={productsBike} />
        </>
      )}

      <Footer />
    </BackPageStyled>
  );
}

export default ProfileViewAdmin;
