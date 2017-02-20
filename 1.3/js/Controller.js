//Controller
var connect = ReactRedux.connect;
var bindActionCreators = Redux.bindActionCreators;
const FilmLibrary = connect(
    state => ({
        film_title : state.film_title,
        film_genre : state.film_genre,
        film_year : state.film_year,
        film_rating : state.film_rating
    }),
    dispatch => bindActionCreators({
        hendlerTitleChange,
        hendlerGenreChange,
        hendlerYearChange,
        hendlerRatingChange,
        hendlerSubmit
    }, dispatch)
)(FormFilmInfo)
