export const beFetchUser = id => (
  $.ajax({
    url: `/api/users/${id}`
  })
)