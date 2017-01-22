import fetch from 'isomorphic-fetch'

const ADD_SITE         = 'ADD_SITE'
const ADD_SITE_SUCCESS = 'ADD_SITE_SUCCESS'
const ADD_SITE_ERROR   = 'ADD_SITE_ERROR'
const ADD_TAG          = 'ADD_TAG'
const ADD_TAG_SUCCESS  = 'ADD_TAG_SUCCESS'
const ADD_TAG_ERROR    = 'ADD_TAG_ERROR'
const SUBMIT           = 'SUBMIT'
const initialState = {
  inputSite: '',
  inputTags: [],
  allSites: [],
  allTags: []
}


export default function firebase (state = initialState, action = {}) {
  switch(action.type) {
    case ADD_SITE:
      let moreSites= state.allSites.slice(0);
      moreSites.push(action.site)
      console.log(JSON.stringify(state)+'state from ADD_SITE_SUCCESS')
      return {
        ...state,
        inputSite: action.site,
        allSites: moreSites
     };
    case ADD_TAG:
      console.log(JSON.stringify(state)+'state from ADD_TAG')
      let newTags=action.tags;
      let moreTags=state.allTags.slice(0);
      moreTags.push(action.tags)
      return {
        ...state,
        inputTags: newTags,
        allTags: moreTags
      }
    case SUBMIT:
      console.log(JSON.stringify(state)+'state from SUBMIT')
      return state
    default:
      return state
  };
};

export function addSite(params) {
console.log('ADD_SITE params '+JSON.stringify(params))
  return function (dispatch, getState) {
    dispatch({type: ADD_SITE, site:params});
    console.log("received action ADD_SITE");
    console.log('added tags from ADD_SITE'+JSON.stringify(params))
    return params.site;
  }
}

export function addTag(params) {
  return function (dispatch, getState) {
    dispatch({type: ADD_TAG, tags:params});
    console.log("received action ADD_TAG");
    console.log('added tags from ADD_TAG'+JSON.stringify(params))
    return params.tags;
  }
}

export function submitTagAndSite() {
  return function (dispatch, getState) {
  console.log("FROM SUBMIT ACTION INPUTSITE OBJECT"+JSON.stringify(getState().firebase.inputTags))
    dispatch({ type: SUBMIT });
    let site=getState().firebase.inputSite.inputSite;
    fetch('https://keeper-bc6d8.firebaseio.com/sites/'+site+'.json', {
      method: 'PATCH',
      body: JSON.stringify({
        tags: getState().firebase.inputTags
      })
    });
    console.log("get state and tags in ADD SITE"+JSON.stringify(getState().firebase.inputTags))
    if (getState().firebase.inputTags.inputTags) {
    getState().firebase.inputTags.inputTags.forEach(function(el) {
    fetch('https://keeper-bc6d8.firebaseio.com/'+el.text+'/inputSite.json', {
      method: 'PATCH',
      body: JSON.stringify({
        sites: getState().firebase.inputSite.inputSite
      })
    });
      
    })
    }
    fetch('https://keeper-bc6d8.firebaseio.com/tags.json', {
      method: 'PATCH',
      body: JSON.stringify({
        tags: getState().firebase.inputTags.inputTags,
        sites: getState().firebase.inputSite.inputSite
      })
    });
    //send api call:fetch or superagent;
    setTimeout(()=>{
      console.log("received action SUBMIT");
      //      const inputSite = params.inputSite
      //      dispatch({ inputSite: params.inputSite, type: SUBMIT_SUCCESS });
    },2000)
  }
}
