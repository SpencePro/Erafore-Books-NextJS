export const AuthorImageStyle = {
    border: '2px solid white'
    , margin: '1rem'
};

export const BackgroundImageStyle = ( bgImg: string ) => {
    return {
        backgroundImage: `url(${ bgImg })`
        , width: '100%'
        , marginBottom: '2rem'
        , padding: '1rem'
        , color: 'white'
        , backgroundAttachment: 'fixed'
        , backgroundPosition: '80%'
    }
};
