/* Redux */
//Model. Enum of Actions
const ACTION = {
	FORM_FILM_TITLE_CHANGE : "FORM_FILM_TITLE_CHANGE",
	FORM_FILM_GENRE_CHANGE : "FORM_FILM_GENRE_CHANGE",
	FORM_FILM_YEAR_CHANGE : "FORM_FILM_YEAR_CHANGE",
	FORM_FILM_RATING_CHANGE : "FORM_FILM_RATING_CHANGE"
};

//Model. Reducer
function reducer( state = {
	film_title : "",
	film_genre : "",
	film_year : "",
	film_rating : ""
	}, action){
		switch(action.type){
			case ACTION.FORM_FILM_TITLE_CHANGE:
				return {
					...state,
					film_title : action.film_title
				};
			case ACTION.FORM_FILM_GENRE_CHANGE:
				return {
					...state,
					film_genre : action.film_genre
				};
			case ACTION.FORM_FILM_YEAR_CHANGE:
				return {
					...state,
					film_year : action.film_year
				};
			case ACTION.FORM_FILM_RATING_CHANGE:
				return {
					...state,
					film_rating : action.film_rating
				};
			default:
				return state;
		}
};

//Model. ActionCreators
function hendlerTitleChange(event){
	return{
		type : ACTION.FORM_FILM_TITLE_CHANGE,
		film_title : event.target.value
	};

function hendlerGenreChange(event){
	return{
		type : FORM_FILM_GENRE_CHANGE,
		film_genre: event.target.value
	};

function hendlerYearChange(event){
	return{
		type : FORM_FILM_YEAR_CHANGE,
		film_year: event.target.value
	};

function hendlerRatingChange(event){
	return{
		type : FORM_FILM_RATING_CHANGE,
		film_rating: event.target.value
	};

function hendlerSubmit(event){
	event.preventDefault();
	return function(dispatch, getState) {
		const state = getState();
		dispatch(reset());
		request('/auth/', {send: {
			film_title : state.film_title,
			film_genre : state.film_genre,
			film_year : state.film_year,
			film_rating : state.film_rating,
			}}).then(function() {
				router.push('/');
			}).catch(function() {
				window.alert("Auth failed")
			});
	}
}