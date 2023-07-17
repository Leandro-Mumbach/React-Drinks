import { SearchForm } from '../../components/SearchForm/SearchForm'
import { DrinksList } from '../../components/DrinksList/DrinksList'
import { DrinkModal } from '../../components/DrinkModal/DrinkModal'

export const Home = () => {
  return (
    <div>
      <SearchForm />
      <DrinksList />
      <DrinkModal />
    </div>
  )
}
