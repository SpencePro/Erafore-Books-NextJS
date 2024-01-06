// Utils
import { create } from 'zustand';

// Types
import { Book, Series, World } from '../types/types';

type BookInfoStore = {
    series: Series[];
    addSeries: ( series: Series ) => void;
    world: World[];
    addWorld: ( world: World ) => void;
}

// export const useBookInfoStore = create<BookInfoStore>( (set) => ( {
//     series: []
//     , world: []
//     , addSeries: ( newSeries: Series ) => {
//         return { series: [ ...series, newSeries ] }
//     }
//     , addWorld: ( newWorld: World ) => {
//         return { series: [ ...state.world, newWorld ] }
//     }
// } ) );
