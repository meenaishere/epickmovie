import apiSlice from "../api/apiSlice";

const movieApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ========================>> ALL MOVIES <<===========================
    movieList: builder.query({
      query: () => "/movie-posts",
      providesTags: ["EpicMovies"],
    }),

    // =====================>> BENGALI MOVIES <<==========================
    bengaliMovieList: builder.query({
      query: () => "/get-bengali-post",
      providesTags: ["EpicMovies"],
    }),

    // =================>>PER PAGE BENGALI MOVIE<<========================
    perPageBengaliMovieList: builder.query({
      query: (page) => `/get-bengali-post?page=${page}`,
      providesTags: ["EpicMovies"],
    }),

    // ======================>>  SINGLE/MOVIE DETAILS <<==================
    movieDetails: builder.query({
      query: (movieId) => `/movie-post/${movieId}`,
      providesTags: ["EpicMovies"],
    }),

    // ===================>>  PAGINATION WISE MOVIE <<====================
    perPgaeMovie: builder.query({
      query: (pageNo) => `/movie-posts?page=${pageNo}`,
      providesTags: ["EpicMovies"],
    }),

    // ===========================>> GENRE <<=============================
    genreList: builder.query({
      query: () => "/terms/genres-list",
      providesTags: ["EpicMovies"],
    }),

    // ===========================>> AUDIO <<=============================
    audListClient: builder.query({
      query: () => "/terms/audio-list",
      providesTags: ["EpicMovies"],
    }),

    // ===========================>> YEAR <<==============================
    yearList: builder.query({
      query: () => "/terms/year-list",
      providesTags: ["EpicMovies"],
    }),

    // ======================>> PIXEL QUALITY <<==========================
    pixelQualityClient: builder.query({
      query: () => "/terms/px-quality-list",
      providesTags: ["EpicMovies"],
    }),

    // ======================>> PRINT QUALITY <<=========================
    printQualityClient: builder.query({
      query: () => "/terms/pr-quality-list",
      providesTags: ["EpicMovies"],
    }),
    // ========================>> COUNTRY <<=============================
    countryListClient: builder.query({
      query: () => "/terms/get-countries",
      providesTags: ["EpicMovies"],
    }),

    // #####################################################################
    //   ############################## ADMIN ROUTES ######################
    // ####################################333##############################

    // =====================>> CREATE MOVIE <<===============
    createMovie: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/admin/create-movie",
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // =======================>> CREATE MOVIE LINK<<=========================
    createMovieLink: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/admin/add-movie-link",
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // =====================>> SINGLE MOVIE DETAILS<<=========================
    adminMovieDetails: builder.query({
      query: (id) => `/admin/get-movie/${id}`,
      providesTags: ["EpicMovies"],
    }),

    // =========================>> GENRE LIST <<==============================
    adminGenreList: builder.query({
      query: () => `/admin/get-genre`,
      providesTags: ["EpicMovies"],
    }),

    // ========================>> CREATE GENRE <<=============================
    createGenre: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/admin/create-genre",
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ====================>> PIXEl QUALITY LIST <<===========================
    pixelQualityList: builder.query({
      query: () => "/admin/get-px-quality",
      providesTags: ["EpicMovies"],
    }),

    // =====================>> CREATE PIXEl QUALITY <<========================
    createPixelQuality: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/admin/create-px-quality",
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ======================>> PRINT QUALITY LIST <<=========================
    printQualityList: builder.query({
      query: () => "/admin/get-pr-quality",
      providesTags: ["EpicMovies"],
    }),

    // ====================>> CREATE PRINT QUALITY <<=========================
    createPrintQuality: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/admin/create-pr-quality",
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ======================>> AUDIO LIST <<=================================
    getAudioList: builder.query({
      query: () => `/admin/get-audio`,
      providesTags: ["EpicMovies"],
    }),

    // ====================>> CREATE AUDIO  <<================================
    createAudio: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/admin/create-audio",
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ====================>> UPDATE MOVIE  <<================================
    updateMovie: builder.mutation({
      query: ({ data, id }) => ({
        method: "PUT",
        url: `/admin/movie-update/${id}`,
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ====================>> UPDATE USERE  <<================================
    updateUser: builder.mutation({
      query: ({ data, id }) => ({
        method: "PUT",
        url: `/admin/get-user-data/${id}`,
        body: data,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ============>> DELETE ALL TERM (QUALITY/ GENRE/ AUDIO)  <<=============
    deleteTerms: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/admin/delete-term/${id}`,
      }),
      invalidatesTags: ["EpicMovies"],
    }),

    // ================>> ALREADY UPLOADED MOVIE <<===========================
    alreadyUploadedMovies: builder.query({
      query: () => `/admin/movie-active-tmdb-ids`,
      providesTags: ["EpicMovies"],
    }),

    // ================>> ALREADY UPLOADED SERIES <<==========================
    alreadyUploadedTvShows: builder.query({
      query: () => `/admin/tvshow-active-tmdb-ids`,
      providesTags: ["EpicMovies"],
    }),
  }),
});

export const {
  useMovieListQuery,
  useMovieDetailsQuery,
  usePerPgaeMovieQuery,
  useGenreListQuery,
  useYearListQuery,
  useCreateMovieMutation,
  useCreateMovieLinkMutation,
  useAdminMovieDetailsQuery,
  useCreateGenreMutation,
  useGetAudioListQuery,
  useCreateAudioMutation,
  useUpdateMovieMutation,
  useUpdateUserMutation,
  useCreatePixelQualityMutation,
  usePixelQualityListQuery,
  usePrintQualityListQuery,
  useCreatePrintQualityMutation,
  useDeleteTermsMutation,
  useAdminGenreListQuery,
  useBengaliMovieListQuery,
  usePerPageBengaliMovieListQuery,
  usePixelQualityClientQuery,
  usePrintQualityClientQuery,
  useAudListClientQuery,
  useCountryListClientQuery,
  useAlreadyUploadedMoviesQuery,
  useAlreadyUploadedTvShowsQuery,
} = movieApi;
export default movieApi;
