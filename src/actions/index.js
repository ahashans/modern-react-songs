export const selectSong = (song)=>{
    //TODO: Return an action
    return{
        type: 'SONG_SELECTED',
        payload: song
    }
}
