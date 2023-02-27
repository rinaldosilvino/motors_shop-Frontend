import { Footer } from "../../components/Footer";
import NavbarLogged from "../../components/NavbarLogged";
import { useState } from "react";
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
import CarouselProductsOwner from "../../components/CarouselProductOwner";
import { CaroselTitle } from "../Home/style";

const ProfileViewAdmin = () => {
  const [showCreateProductModal, setShowCreateProductModal] = useState(false);

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
          <ButtonLoginStyled>SL</ButtonLoginStyled>
          <ContentTitleStyled>
            <p>Nome do Usuário</p>
            <small>Anunciante</small>
          </ContentTitleStyled>

          <DescriptionProfile>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </DescriptionProfile>

          <ButtonCreateAnnouncement
            onClick={() => setShowCreateProductModal(true)}
          >
            Criar Anúncio
          </ButtonCreateAnnouncement>
        </ProfileContent>
      </ProfileHeader>
      <CaroselTitle id="cars">Carros</CaroselTitle>
      <CarouselProductsOwner />
      <CaroselTitle id="motorcycle">Motos</CaroselTitle>
      <CarouselProductsOwner />
      <Footer />
    </BackPageStyled>
  );
};

export default ProfileViewAdmin;
