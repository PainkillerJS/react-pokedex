import type { FC } from 'react';

import styles from '@containers/PokemonsContainer/pokemon.module.css';

interface PokemonCardProps {
  activePokemon: Pokemon;
}

const PokemonCard: FC<PokemonCardProps> = ({ activePokemon }) => (
  <div className={styles.pokemon_card}>
    <img src={activePokemon.sprites.front_default ?? ''} alt='pokemon active' />

    <div className={styles.pokemon_types}>
      {activePokemon.types.map(({ type }) => (
        <div className={styles.pokemon_type} key={type.name}>
          {type.name}
        </div>
      ))}
    </div>

    <div className={styles.pokemon_card_info}>
      <div>
        <h4 className={styles.pokemon_card_info_title}>Stats</h4>
        <ul>
          {activePokemon.stats.map(({ stat, base_stat }) => (
            <li key={stat.name} className={styles.pokemon_card_info_item}>
              <p>
                {stat.name}: {base_stat}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className={styles.pokemon_card_info_title}>Abilities</h4>
        <ul>
          {activePokemon.abilities.map(({ ability }) => (
            <li key={ability.name} className={styles.pokemon_card_info_item}>
              {ability.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default PokemonCard;
