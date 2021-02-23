export const fetchAlbums = () => (
  $.ajax({
    url: `/api/albums`
  })
);

export const fetchAlbum = albumId => (
  $.ajax({
    url: `/api/albums/${albumId}`
  })
);

export const getUserAlbums = () => (
  $.ajax({
    url: 'api/albums',
    data: { request_type: 'user'},
  })
)

export const getAlbumSongs = albumId => (
  $.ajax({
    url: `/api/albums/${albumId}/tracks`,
  })
)

export const timeAdder = (times) => {
    let counter = 0;

    times.forEach((time) => {
        const parts = time.split(":");
        var min = parseInt(parts[0]);
        var sec = parseInt(parts[1]);
        counter += min * 60;
        counter += sec;
    });

    const totalMin = Math.floor(counter / 60);

    if (totalMin < 60) {
        return `${totalMin} Minutes`;
    } else if (totalMin == 60) {
        return "1 Hour";
    } else {
        return `1 Hour ${totalMin - 60} Minutes`;
    }
};