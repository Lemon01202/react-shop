import './Carousel.css';
import { Carousel } from "react-bootstrap";
function Carousel_() {
	return (
		<div className='carousel'>
			<Carousel fade>
				<Carousel.Item interval={4000}>
					<img
						className="d-block w-100"
						src="https://fashionista.com/.image/t_share/MTY3MzAzNzU4MzgyOTAxMDcz/paris-fashion-week-street-style-spring-2020-day-7.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={4000}>
					<img
						className="d-block w-100"
						src="https://www.buro247.ua/images/2020/1/new-york-fashion-week-fall-2020-streetstyle-02.jpg"
						alt="Second slide"
					/>
					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={4000}>
					<img
						className="d-block w-100"
						src="https://stylecaster.com/wp-content/uploads/2021/06/bella-1.jpg"
						alt="Third slide"
					/>
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={4000}>
					<img
						className="d-block w-100"
						src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bella-hadid-street-style-1539096212.jpg"
						alt="Third slide"
					/>
					<Carousel.Caption>
						<h3>Fourh slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Carousel_;