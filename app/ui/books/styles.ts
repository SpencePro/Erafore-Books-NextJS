export const BookCard = {
    margin: '1rem'
    , padding: '0.5rem'
    , '& img': {
        border: '3px solid grey'
    }
}

export const CardContents = {
    marginLeft: '1rem'
    , '& p': {
        marginBottom: '0.75rem'
    }
}

export const OnSaleRibbon = {
    height: '35px'
    , width: '100%'
    , backgroundColor: '#9C1B21'
    , position: 'absolute'
    , top: 0
    , textAlign: 'center'
    , color: '#FFF'
    , fontWeight: 600
    , fontSize: '24px'
    , whiteSpace: 'nowrap'
}

export const ImageModalStyle = {
    position: 'fixed'
    , zIndex: 1
    , display: 'flex'
    , justifyContent: 'center'
    , overflow: 'auto'
    , textAlign: 'center'
    , width: '100%'
    , margin: '0.5rem'
}

export const ImageBoxStyle = {
    padding: '1rem'
    , borderRadius: 4
    , overflow: 'auto'
    , background: 'white'
    , position: 'sticky'
    , '& btn': {
        marginBottom: '0.5rem'
    }
    , '& img': {
        borderRadius: 4
    }
}

export const SynopsisStyle = {
    maxHeight: '7rem'
    , overflow: 'hidden'
    , '-webkit-mask-image': 'linear-gradient(white, transparent)'
}
