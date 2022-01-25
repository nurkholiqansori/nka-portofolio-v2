module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './pages/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: { 'fade-in-down': 'fade-in-down .8s ease-out' },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            borderRadius: '50%',
          },
          '100%': {
            opacity: '1',
            borderRadius: 0,
          },
        },
      },
      content: {
        link: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAECAMAAABBYRRTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAwFBMVEUAAACkpKSkpKOlpaWlpqWmp6ampqalpaampqWmpaWnpaanpaWmpaamp6elp6alp6WlpqZ8nJijpKOhoaKkpKSlpaWlpKSlpaSkpKSlpKWlpKSlpaSkpKOlpaWlpqWmp6ampqalpaampqWmpaWnpaanpaWmpaampqelp6alp6WlpqalpqekpKWlpKWlpKSkpKShpKSlpaWmpqWlp6WlpqWmpaampqampaWlpqalpaampaakpaWlpaWlpaWlpqb///8gBC0SAAAAP3RSTlMAAAAAAAAAAAAAAAAAAAAAAAAADnm8ZgkzsddfCRYWFhYWFhYWFhYWFhYWFkfE2mILaWlpaWlpaWlpapPGoTSQ8PR7AAAAAWJLR0Q/PmMwdQAAAAd0SU1FB+YBEw8FKDCbmHwAAABySURBVAjXbcEHAoIwDADAQBnirHuGISpYB7aSUgT9/7P8AHcA3az5Yrla2zYw5rie3wvc/mDoj8YT7niMBZxPN9vd/jADxDCKk2Manc6XJMuvIowRUyFueH88ixdIqd4l6UppbWqjlZJ1SVQZok/Tfn9/zwwM15jwtP4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDEtMTlUMTU6MDU6MjErMDA6MDAtqH9fAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAxLTE5VDE1OjA1OjIxKzAwOjAwXPXH4wAAAABJRU5ErkJggg==")',
        markdown:
          'url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWxpbmsiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGFyaWEtaGlkZGVuPSJ0cnVlIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03Ljc3NSAzLjI3NWEuNzUuNzUgMCAwMDEuMDYgMS4wNmwxLjI1LTEuMjVhMiAyIDAgMTEyLjgzIDIuODNsLTIuNSAyLjVhMiAyIDAgMDEtMi44MyAwIC43NS43NSAwIDAwLTEuMDYgMS4wNiAzLjUgMy41IDAgMDA0Ljk1IDBsMi41LTIuNWEzLjUgMy41IDAgMDAtNC45NS00Ljk1bC0xLjI1IDEuMjV6bS00LjY5IDkuNjRhMiAyIDAgMDEwLTIuODNsMi41LTIuNWEyIDIgMCAwMTIuODMgMCAuNzUuNzUgMCAwMDEuMDYtMS4wNiAzLjUgMy41IDAgMDAtNC45NSAwbC0yLjUgMi41YTMuNSAzLjUgMCAwMDQuOTUgNC45NWwxLjI1LTEuMjVhLjc1Ljc1IDAgMDAtMS4wNi0xLjA2bC0xLjI1IDEuMjVhMiAyIDAgMDEtMi44MyAweiI+PC9wYXRoPjwvc3ZnPg==)',
        divider: '&#8213;',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/forms')],
  variants: {
    scrollbar: ['rounded'],
  },
}
