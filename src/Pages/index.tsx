import { FC } from "react"
import { Container } from '@mui/material'
import { useTranslation } from 'react-i18next'
import HeaderContainer from "../shared/components/HomePage/HeaderContainer";
import HomeListUsers from "../shared/components/HomePage/HomeListUsers";
import HomeJoinUs from "../shared/components/HomePage/HomeJoinUs";

const Home: FC = () => {

  const { t } = useTranslation();

    return (
        <Container>
            <HeaderContainer />
            <HomeListUsers />
            <HomeJoinUs />
        </Container>
    )
}

export default Home