import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  fab: {
    position: 'absolute',
    margin: 25,
    right: 0,
    bottom: 0,
    backgroundColor: '#ff4081',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default styles;
