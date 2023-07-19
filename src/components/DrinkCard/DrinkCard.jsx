import {Col, Card, Button, Row} from "react-bootstrap";
import  {useDrinks} from "../../hooks/useDrinks";
import {PropTypes} from "prop-types";
import {useCart} from "../../hooks/useCart"

export const DrinkCard = ({drink}) => {

    const {handleModalClick, handleDrinkIdClick} = useDrinks()

    const {addToCart} = useCart()

    const handleAddToCart = (drink) => {
        addToCart(drink)
    }

  return (
    <Col md={6} lg={3}>
        <Card className="mb-4">
            <Card.Img 
            variant="top"
            src={drink.strDrinkThumb}
            alt={`Imagen de ${drink.strDrink}`}
            />
            <Card.Body>
                <Card.Title style={{height: "45px", textAlign:"center"}}> 
                    {drink.strDrink}
                </Card.Title>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Card.Subtitle>{`Precio: $${drink.price}`}</Card.Subtitle>
                </div>
                <Row>
                    <Col className="p-3 mt-2">
                        <Button
                            variant="warning"
                            className="text-uppercase h-100"
                            onClick={ () => {
                                handleModalClick();
                                handleDrinkIdClick(drink.idDrink)
                            }}>
                            Ver Receta
                        </Button>
                    </Col>
                    <Col className="p-3 mt-2">
                        <Button
                            variant="primary"
                            className="text-uppercase h-100"
                            onClick={ () => 
                                handleAddToCart(drink)
                            }>
                            Agregar al carrito
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Col>
  )
}

DrinkCard.propTypes = {
    drink: PropTypes.shape({
        strDrinkThumb: PropTypes.string.isRequired,
        strDrink: PropTypes.string.isRequired,
        idDrink: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
}