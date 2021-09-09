import { Container, Avatar, Info } from './styles'

export default function RecommendCard({ recommend }) {
    return (
        <Container>
            <Avatar src={recommend.avatar}></Avatar>
            <Info>
                <a>{recommend.name}</a>
                <span>{recommend.username}</span>
            </Info>
        </Container>
    )
}
