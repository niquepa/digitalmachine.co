import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Carousel as CarouselBS, CarouselItem, CarouselCaption, CarouselIndicators, CarouselControl } from 'reactstrap';
import Section from '../Section';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.data.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.data.length.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const { data } = this.props;

    let items;
    if (data) {
      items = data.map(item => (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.sys.id}
        >
          <img src={item.fields.logo.fields.file.url} alt={item.fields.title} />
          <CarouselCaption captionText={item.fields.Summary} captionHeader={item.fields.title} />
        </CarouselItem>
      ));
    }

    return (
      <Container>
        <CarouselBS activeIndex={activeIndex} next={this.next} previous={this.previous} interval={360000}>
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {items}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </CarouselBS>
      </Container>
    );
  }
}

Carousel.propTypes = {
  data: PropTypes.object, // TODO: Validate object
};

export default Carousel;
