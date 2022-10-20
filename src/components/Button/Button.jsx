import { Button } from './Button.styled';

export const LoadMore = ({ loadMore }) => {
  function onButtonClick() {
    loadMore();
  }
  return <Button onClick={onButtonClick}>Load more</Button>;
};
