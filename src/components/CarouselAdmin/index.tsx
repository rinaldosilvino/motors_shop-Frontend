import { CarouselProductsContainer } from "./style";
import { useContext, useEffect, useState } from "react";
import { IUser } from "../../context/ProductContext";
import api from "../../services/api";
import CardProductAdmin from "../CardProductAdmin";
import { CheckTypeContext } from "../../context/CheckTypeContext";
import { UpdateApiContext } from "../../context/UpdateApi";

function CarouselAdmin({ props, products }: any) {
  const [userInfo, setUserInfo] = useState<IUser | undefined>();
  const [state, setState] = useState({} as any);

  const { isBikes, isCar, isCarOrBikesExists } = useContext(CheckTypeContext);
  const { updateApi } = useContext(UpdateApiContext);
  // useEffect(() => {
  //   isCarOrBikesExists(products);
  // }, [products, isCarOrBikesExists]);

  // useEffect(() => {
  //   api
  //     .get(`users/${id}`)
  //     .then((res) => {
  //       setUserInfo(res.data);
  //       setState(isCarOrBikesExists(res.data.vehicle));
  //     })
  //     .catch((err) => console.log("Tente novamente mais tarde."));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [updateApi]);

  return (
    <CarouselProductsContainer>
      {props === "car" ? (
        products.length === 0? (
          <p>Nenhum Carro Cadastrado</p>
        ) : (
          products?.map(
            (elem:any) =>
              elem.type_veihcle === props && (
                <CardProductAdmin
                  key={elem.id}
                  product={elem}
                  // sellerName={elem.user.fullName} //Não existe vendedor vinculado ao vehicle
                  // sellerId={elem.user.id}  //Não existe vendedor vinculado ao vehicle
                  sellerName={"Higor"} //Não existe vendedor vinculado ao vehicle
                  sellerId={"970a2828-a74f-405d-a342-bfb0daddb74e"}  //Não existe vendedor vinculado ao vehicle
                />
              )
          )
        )
      ) : products.length === 0 ? (
        <p>Nenhuma Moto Cadastrada</p>
      ) : (
        products?.map(
          (elem:any) =>
            elem.type_veihcle === props && (
              <CardProductAdmin
                key={elem.id}
                product={elem}
                sellerName={"Higor"} //Não existe vendedor vinculado ao vehicle
                sellerId={"970a2828-a74f-405d-a342-bfb0daddb74e"}  //Não existe vendedor vinculado ao vehicle
              />
            )
        )
      )}
    </CarouselProductsContainer>
  );
}

export default CarouselAdmin;
