import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CategoriesActions from '~/store/ducks/categories';

import {
  Container, CategoriesList, Category, CategoryText,
} from './styles';

class Categories extends Component {
  static propTypes = {
    categories: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
    }).isRequired,
    loadCategoriesRequest: PropTypes.func.isRequired,
    selectCategoryRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { loadCategoriesRequest } = this.props;

    loadCategoriesRequest();
  }

  handleClickCategory = (category) => {
    const { selectCategoryRequest } = this.props;

    selectCategoryRequest(category.id);
  };

  render() {
    const { categories } = this.props;

    return (
      <Container>
        <CategoriesList
          horizontal
          data={categories.data}
          keyExtractor={category => String(category.id)}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: category }) => (
            <Category
              onPress={() => this.handleClickCategory(category)}
              active={category.id === categories.selected}
            >
              <CategoryText active={category.id === categories.selected}>
                {category.title}
              </CategoryText>
            </Category>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({ categories: state.categories });

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);
