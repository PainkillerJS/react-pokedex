import type { FC } from 'react';
import { KeyboardEventHandler, memo } from 'react';
import { useNavigate } from 'react-router';

import PokemonCard from '@containers/PokemonsContainer/components/PokemonCard';
import { useRequestPokemonQuery } from '@utils/api/hooks';
import { getPokemonId } from '@utils/helpers';

import styles from '@containers/PokemonsContainer/pokemon.module.css';

interface PokemonInfoProps extends Pick<Pokemon, 'name'> {
  id: number;
  handleMouseLeave: () => void;
  handleMouseEnter: (id: Pokemon['id']) => void;
  isActiveCard: boolean;
}

const PokemonInfo: FC<PokemonInfoProps> = memo(
  ({ name, id, handleMouseLeave, handleMouseEnter, isActiveCard }) => {
    const navigate = useNavigate();

    const { isLoading, data } = useRequestPokemonQuery({ params: { id } });

    if (isLoading || !data) {
      return <>Error!</>;
    }

    const handleBackHistory = () => isActiveCard && navigate(`/pokemon/${id}`);
    const handleKeyboardBackHistory: KeyboardEventHandler<HTMLDivElement> = (event) =>
      event.key === 'Enter' && navigate(`/pokemon/${id}`);

    return (
      <div
        className={styles.pokemon_number}
        onMouseEnter={() => handleMouseEnter(id)}
        onMouseLeave={handleMouseLeave}
        onKeyPress={handleKeyboardBackHistory}
        role='button'
        tabIndex={0}
        onClick={handleBackHistory}
      >
        <div className={styles.pokemon}>
          <p className={styles.pokemon_name}>{name}</p>
          <div className={styles.pokemon_number}>{getPokemonId(id)}</div>
        </div>

        {isActiveCard && (
          <div className={styles.pokemon_info}>
            <PokemonCard activePokemon={data.data} />
          </div>
        )}
      </div>
    );
  }
);

export default PokemonInfo;
