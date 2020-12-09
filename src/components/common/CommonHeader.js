import './common-header.less';
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

export default function CommonHeader() {
  return (
    <Header className="header">
      <div className="logo">
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 120, fill: '#2CBE99' }}
        >
          <path d="M478.522 424.429l-7.457 12.764-17.353 29.704-19.724 33.762a322025.94 322025.94 0 0 1-17.568 30.072c-0.178 0.306-0.202 0.247-0.579 0.247h-67.838l12.941-22.493h-33.875c-0.135 0-0.361 0.552-0.422 0.655l-1.38 2.358-9.19 15.705-2.209 3.775c-0.081 0.139-1.586 0.002-1.742 0.002h-66.97l5.44-9.285 13.911-23.745 18.77-32.039 20.016-34.167 17.65-30.128 11.671-19.922 2.465-4.207c0.093-0.158 0.134-0.365 0.325-0.365h68.155l-10.381 17.848-19.355 33.277-10.646 18.304-0.003 0.005h33.875c0.137 0 0.368-0.553 0.429-0.657l1.405-2.362 9.272-15.584 1.541-2.589c0.05-0.085 0.454-0.932 0.555-0.932H462.511c5.34-0.003 10.675-0.003 16.011-0.003z m158.63-47.309L629.685 390c-0.344 0.593-0.784 2.123-1.566 2.123h-53.155c-0.185 0-1.946-0.16-2.04 0.004l-1.431 2.485-17.378 30.191-3.55 6.168h68.224c0.342 0 0.651 0.953 0.793 1.213l2.652 4.843 17.296 31.593 2.475 4.522c0.21 0.384 0.604 0.739 0.373 1.137l-4.623 7.971-18.677 32.203-7.482 12.9-1.839 3.171c-0.19 0.328-0.166 0.456-0.524 0.456H494.449c-0.095 0-0.93 0.08-0.981-0.006l-1.019-1.74-6.318-10.789-19.178-32.751-8.284-14.147H575.598c0.513 0 0.451-0.044 0.731-0.53l7.852-13.642 6.568-11.411H472.94l10.748-17.55 20.117-32.847 11.294-18.441c0.061-0.099 0.724-0.02 0.83-0.02H631.235c1.91 0 4.04-0.231 5.917 0.014z m208.371 52.892l-7.846 13.248-17.94 30.293-19.64 33.164-12.945 21.859c-0.256 0.433-1.037 2.404-1.61 2.404H685.296c-5.88 0-11.759 0.052-17.639 0.079l-36.918 0.175-8.057 0.038 5.188-9.64 13.218-24.563 17.73-32.947 18.724-34.794 16.2-30.103 10.157-18.875 1.713-3.184c0.081-0.15 0.805-0.045 0.953-0.045h73.565c0.394 0 0.445-0.016 0.741 0.225l6.299 5.131a657202.202 657202.202 0 0 1 53.528 43.605l4.825 3.93z m-75.414 11.344h-34.261c-0.38 0-1.131 1.782-1.304 2.08l-8.641 14.896-7.553 13.022h34.261c0.38 0 1.131-1.782 1.304-2.08l8.641-14.896 7.553-13.022z m253.442-64.236l-11.837 20.838-17.405 30.639-2.038 3.588c-0.274 0.482-0.247 0.705-0.787 0.705h-42.676l12.286 25.236 7.081 14.544 1.361 2.796c0.063 0.129-0.77 0.828-0.865 0.924a372124.6 372124.6 0 0 0-19.767 19.9l-26.24 26.417-7.374 7.424c-0.135 0.136-0.658 0.849-0.866 0.849H798.891l11.594-19.864 18.58-31.834 4.316-7.395c0.177-0.303 0.736-0.148 1.054-0.148H897.728l-12.705-26.029a75482.31 75482.31 0 0 1-6.257-12.82c0.446 0.101 0.941-1.247 1.114-1.549l2.534-4.43 8.309-14.522 17.609-30.778 2.116-3.698c0.121-0.212 0.293-0.793 0.574-0.793H1023.551zM0 345.142h134.603c0.277 0 1.072 1.635 1.208 1.851l3.785 5.993 13.761 21.79 19.18 30.371 21.196 33.564 19.81 31.368 15.02 23.784 6.827 10.811c0.274 0.434-0.736 1.504-0.97 1.874a45119.92 45119.92 0 0 1-4.557 7.19l-16.639 26.256-21.036 33.195-18.668 29.458-9.536 15.048-0.227 0.357-3.254-5.422-8.991-14.984-13.574-22.622-17.003-28.336-19.277-32.126-20.397-33.992-20.362-33.935-19.173-31.953-16.83-28.047-13.332-22.218-8.68-14.465c-0.961-1.605-1.922-3.207-2.884-4.81z m212.619 0l-14.592 26.14-3.259 5.838H310.182c0.363 0 0.7-0.967 0.858-1.236l8.012-13.636 10.051-17.106H212.619z m34.969 244.774l1.762-2c3.313 3.759 8.84 5.683 13.704 4.066 3.872-1.287 6.115-5.831 3.803-9.527-1.658-2.651-5.393-3.686-8.133-4.892-2.819-1.241-5.958-2.38-7.858-4.945-1.699-2.293-1.959-5.519-0.799-8.109 1.177-2.63 3.713-4.326 6.454-4.988 3.233-0.781 6.778-0.304 9.69 1.298 0.368 0.203 3.484 2.259 3.193 2.591l-1.576 1.796c-3.2-3.383-9.472-4.979-13.443-1.94-1.612 1.234-2.333 3.214-2.064 5.209 0.278 2.066 1.714 3.528 3.458 4.521 5.174 2.947 13.788 4.072 14.75 11.159 0.668 4.917-2.409 9.033-7.087 10.373-5.633 1.613-11.975-0.241-15.854-4.612z m30.226-30.12c0.283 0 2.859-0.014 2.859 0.014v34.576c0 0.221-2.174 0.096-2.483 0.096-0.512 0-0.376-0.1-0.376-0.58v-2.158-7.703-24.245z m10.758 17.319c0-6.586 2.447-13.767 8.842-16.674 3.155-1.434 6.997-1.734 10.268-0.534a12.043 12.043 0 0 1 4.647 3.081c0.481 0.518 0.144 0.59-0.286 1.083l-0.998 1.144c-3.002-3.579-8.233-4.391-12.388-2.458-3.615 1.682-5.697 5.297-6.542 9.066-1.692 7.554 0.164 19.126 9.383 20.562 4.134 0.644 7.721-1.022 10.486-4.04l0.872 0.975c0.305 0.342 0.891 0.672 0.548 1.056-1.319 1.481-2.879 2.76-4.691 3.59-3.294 1.51-7.318 1.506-10.678 0.192-6.833-2.674-9.463-10.226-9.463-17.043z m32.045-17.319c0.302 0 2.859-0.033 2.859 0.031V574.501c0 0.475 0.139 0.332 0.61 0.332h16.267c0.129 0 1.157 0.07 1.157-0.055v-2.408-9.31-2.994c0-0.615 1.795-0.271 2.299-0.271 0.606 0 0.513-0.025 0.513 0.525v33.739c0 0.622-0.165 0.422-0.845 0.422h-1.902c-0.128 0-0.065-0.247-0.065-0.353v-15.911c0-0.232 0.156-0.91-0.138-0.91h-17.85c-0.097 0-0.046 4.656-0.046 4.997v11.997c0 0.442-2.063 0.19-2.483 0.19-0.512 0-0.376-0.1-0.376-0.58v-2.159-7.705-24.251z m33.67 21.129v-14.56-6.373c0-0.462 1.926-0.195 2.337-0.195 0.717 0 0.522 0.158 0.522 0.837v16.941c0 5.346-0.17 12.735 6.113 14.569 2.82 0.823 6.329 0.458 8.635-1.461 2.867-2.386 3.431-6.489 3.431-9.992V565.12v-5.312c0-0.018 2.713-0.018 2.713 0v18.896c0 5.897-0.521 12.989-6.837 15.516-2.894 1.158-6.453 1.212-9.411 0.254-3.372-1.092-5.639-3.788-6.663-7.127-0.633-2.075-0.84-4.263-0.84-6.422z m48.406 1.894h-13.496c-0.126 0-0.573 1.647-0.62 1.787l-1.463 4.326-1.408 4.163c-0.195 0.578-0.187 1.386-0.845 1.386h-2.483l9.884-28.244 1.951-5.576 0.302-0.864c0.02-0.058 2.925-0.058 2.945 0l3.686 10.534 8.452 24.151c-0.497 0-2.96 0.277-3.098-0.139l-1.181-3.573-2.626-7.951z m-0.758-2.278l-1.957-5.853c-0.585-1.749-1.196-3.488-1.766-5.242-0.256-0.787-1.945-7.148-2.368-7.09-1.73 6.138-3.844 12.153-5.904 18.185h11.995z m13.053-20.745c0.389 0 2.804-0.245 2.953 0.007l0.645 1.084 3.707 6.233 8.928 15.012a90.504 90.504 0 0 1 1.497 2.598l2.077 3.769c0.203 0.367 0.902 2.236 1.412 2.131-0.431-6.62-0.384-13.232-0.384-19.861v-8.834-2.047c0-0.199 2.306-0.09 2.644-0.09 0.139 0 0.069 27.177 0.069 29.599v4.838c0 0.57-1.14 0.25-1.572 0.25-0.625 0-1.233 0.247-1.561-0.307l-7.848-13.261-5.842-9.871c-0.501-0.846-0.972-1.709-1.452-2.566l-1.867-3.331c-0.18-0.32-0.617-1.595-1.078-1.501 0.284 6.469 0.383 12.885 0.383 19.357V594.3c0 0.466-1.908 0.197-2.324 0.197-0.523 0-0.388-0.091-0.388-0.58v-2.159-7.705-18.719l0.001-5.538z m44.238 0c0.302 0 2.859-0.033 2.859 0.031V574.501c0 0.475 0.139 0.332 0.61 0.332h16.265c0.129 0 1.157 0.07 1.157-0.055v-2.408-9.31-2.994c0-0.615 1.796-0.271 2.3-0.271 0.606 0 0.514-0.025 0.514 0.525v33.739c0 0.622-0.165 0.422-0.846 0.422h-1.903c-0.128 0-0.066-0.247-0.066-0.353v-15.911c0-0.232 0.156-0.91-0.138-0.91H462.13c-0.097 0-0.046 4.656-0.046 4.997v11.997c0 0.442-2.063 0.19-2.483 0.19-0.512 0-0.376-0.1-0.376-0.58v-2.159-7.705l0.001-24.251z m30.089 30.777l1.526-1.945c2.958 3.091 7.617 5.23 11.877 3.557 4.328-1.699 5.871-6.71 5.122-10.983-0.746-4.253-4.109-6.92-8.427-6.641a8.972 8.972 0 0 0-3.399 0.921c-0.533 0.263-1.044 0.568-1.543 0.892-0.516 0.335-0.464 0.386-0.944 0.095-0.145-0.088-1.398-0.712-1.388-0.845l0.044-0.593 1.134-15.134c0.029-0.391 12.757-0.115 14.045-0.115 0.269 0 1.597-0.194 1.804 0 0.174 0.163 0 1.436 0 1.683 0 0.228 0.156 0.746-0.136 0.746h-7.634c-0.481 0-5.579-0.189-5.605 0.109l-0.677 7.865-0.318 3.69c3.636-2.324 9.005-2.303 12.441 0.442 3.462 2.766 4.225 7.924 3.335 12.041-0.899 4.157-4.002 7.546-8.198 8.48-4.385 0.976-9.004-0.58-12.28-3.529-0.265-0.24-0.524-0.486-0.779-0.736z m47.137-28.347h-10.674c-0.507 0-0.225-1.936-0.225-2.41 0-0.04 12.661-0.02 13.56-0.02h10.875c0.663 0 0.296 1.344 0.296 1.856 0 0.268 0.138 0.574-0.163 0.574h-9.945c-0.319 0-0.828-0.187-0.828 0.194v32.004c0 0.126-2.451 0.058-2.757 0.058-0.323 0-0.147-2.827-0.147-3.177v-18.069-7.832c-0.001-1.045-0.07-2.151 0.008-3.178z m20.417-2.43h18.265c0.744 0 0.914-0.212 0.914 0.574v1.836c0 0.043-0.39 0.02-0.436 0.02h-15.517c-0.546 0-0.368 0.201-0.368 0.743v11.765c0 0.318 0.956 0.145 1.209 0.145H573.124c0.12 0 0.357-0.068 0.357 0.075v2.077c0 0.539-1.008 0.278-1.456 0.278h-12.067c-0.434 0-0.232 0.559-0.232 0.929v12.635c0 0.201-0.138 1.145 0.109 1.145h15.497c0.447 0 1.229-0.241 1.229 0.283 0 0.485 0.34 2.192-0.258 2.192h-19.008c-0.319 0-0.429 0.102-0.429-0.213v-1.681-7.101-18.915c0.003-2.263 0.003-4.525 0.003-6.787z m25.1 17.319c0-6.584 2.445-13.766 8.837-16.674 3.154-1.435 6.994-1.733 10.264-0.534a11.984 11.984 0 0 1 4.646 3.081c0.48 0.518 0.14 0.592-0.291 1.083l-1.004 1.144c-3.002-3.577-8.221-4.39-12.377-2.458-3.617 1.682-5.707 5.295-6.556 9.066-1.701 7.562 0.169 19.128 9.393 20.562 4.134 0.642 7.721-1.017 10.484-4.04l0.88 0.975c0.307 0.34 0.898 0.671 0.556 1.056-1.316 1.483-2.876 2.761-4.687 3.59-3.295 1.509-7.32 1.506-10.681 0.192-6.835-2.674-9.464-10.226-9.464-17.043z m32.034-17.319c0.302 0 2.854-0.033 2.854 0.031V574.501c0 0.475 0.139 0.332 0.61 0.332h16.27c0.129 0 1.157 0.07 1.157-0.055v-2.408-9.31-2.994c0-0.615 1.796-0.271 2.3-0.271 0.606 0 0.514-0.025 0.514 0.525v33.739c0 0.622-0.165 0.422-0.846 0.422h-1.903c-0.128 0-0.065-0.247-0.065-0.353v-15.911c0-0.232 0.156-0.91-0.138-0.91h-17.854c-0.097 0-0.046 4.656-0.046 4.997v11.997c0 0.442-2.058 0.19-2.479 0.19-0.512 0-0.375-0.101-0.375-0.58v-2.159-7.705l0.001-24.251z m33.808 0c0.39 0 2.814-0.246 2.964 0.007l0.645 1.084 3.706 6.233 8.927 15.012a92.967 92.967 0 0 1 1.498 2.598l2.078 3.769c0.203 0.367 0.902 2.236 1.413 2.131-0.44-6.619-0.384-13.233-0.384-19.861v-8.834-2.047c0-0.199 2.305-0.09 2.643-0.09 0.139 0 0.069 27.177 0.069 29.599v4.838c0 0.571-1.147 0.25-1.579 0.25-0.626 0-1.239 0.249-1.568-0.307l-7.84-13.261-5.836-9.871c-0.501-0.847-0.974-1.709-1.456-2.566l-1.873-3.331c-0.181-0.321-0.62-1.596-1.082-1.501 0.286 6.469 0.384 12.885 0.384 19.357V594.3c0 0.466-1.904 0.197-2.319 0.197-0.523 0-0.387-0.091-0.387-0.58v-2.159-7.705-18.719c-0.003-1.849-0.003-3.694-0.003-5.538z m31.478 17.219c0-4.445 0.987-9.1 3.751-12.682a13.202 13.202 0 0 1 9.655-5.129c3.81-0.243 7.6 0.995 10.348 3.684 3.049 2.984 4.49 7.224 4.894 11.392 0.787 8.135-2.045 18.335-11.04 20.455-3.728 0.879-7.807 0.207-10.936-2.037-3.38-2.424-5.331-6.324-6.152-10.323a26.648 26.648 0 0 1-0.52-5.36z m25.827 0c0-4.287-0.933-8.999-4.01-12.188-2.591-2.686-6.523-3.676-10.122-2.77-8.926 2.246-10.015 14.589-7.749 21.867 0.873 2.805 2.482 5.477 5.005 7.079 2.375 1.509 5.388 1.893 8.1 1.191 6.588-1.705 8.776-9.144 8.776-15.179z m10.915-17.219c0.284 0 2.859-0.015 2.859 0.015v31.896c0 0.373-0.008 0.311 0.38 0.311h15.216c0.474 0 0.205 1.953 0.205 2.398 0 0.156-13.446 0.077-14.629 0.077-0.34 0-4.03 0.116-4.03-0.096v-4.283-30.304l-0.001-0.014z m21.529 17.219c0-4.445 0.987-9.1 3.751-12.682a13.203 13.203 0 0 1 9.654-5.129c3.81-0.243 7.601 0.995 10.349 3.684 3.049 2.984 4.491 7.224 4.894 11.392 0.787 8.136-2.046 18.335-11.041 20.455-3.727 0.878-7.801 0.206-10.929-2.037-3.38-2.425-5.335-6.323-6.157-10.323a26.576 26.576 0 0 1-0.521-5.36z m25.841 0c0-4.287-0.935-8.999-4.014-12.188-2.592-2.685-6.524-3.676-10.123-2.77-8.925 2.247-10.017 14.588-7.75 21.867 0.873 2.805 2.482 5.477 5.005 7.079 2.374 1.508 5.386 1.893 8.097 1.191 6.587-1.705 8.785-9.142 8.785-15.179z m8.733 0.1c0-6.883 2.802-14.17 9.612-16.872 3.38-1.341 7.438-1.513 10.825-0.127 1.633 0.668 3.091 1.695 4.337 2.938 0.457 0.456 0.062 0.575-0.335 1.017l-1.026 1.144c-3.124-3.591-8.396-4.342-12.695-2.586-3.646 1.489-5.97 4.824-6.984 8.535-2.029 7.425-0.396 18.705 8.3 20.96 2.238 0.58 4.682 0.539 6.909-0.065 1.103-0.299 3.768-1.059 3.768-2.466v-8.439c0-0.369 0.243-1.517-0.218-1.517h-7.675c-0.439 0-0.005-2.43-0.149-2.43h10.634c0.353 0 0.165 0.922 0.165 1.203v12.301c0 1.175-1.975 2.129-2.887 2.62-4.995 2.696-11.856 2.403-16.385-1.115-4.568-3.547-6.196-9.541-6.196-15.101z m39.702 3.426l-10.414-20.745c0.379 0 2.944-0.222 3.058 0.016l1.113 2.32 3.713 7.744c0.79 1.647 1.574 3.297 2.358 4.946 0.326 0.686 0.655 1.371 0.989 2.053 0.235 0.479 0.456 1.532 0.891 0.692 0.765-1.476 1.534-2.95 2.264-4.443 1.226-2.511 2.385-5.059 3.596-7.579l2.51-5.224c0.201-0.419 0.146-0.527 0.611-0.527h2.593l-6.32 12.58-3.524 7.016c-0.175 0.349-0.485 0.766-0.577 1.149-0.142 0.591 0 1.392 0 1.995V594.388c0 0.2-2.439 0.092-2.792 0.092-0.133 0-0.067-12.425-0.067-13.763-0.002-0.058-0.002-0.117-0.002-0.176z m26.817-3.426c0-6.584 2.446-13.766 8.838-16.674 3.154-1.435 6.994-1.733 10.265-0.534a11.995 11.995 0 0 1 4.647 3.081c0.48 0.518 0.14 0.592-0.291 1.083l-1.004 1.144c-3.002-3.576-8.22-4.39-12.375-2.458-3.617 1.682-5.708 5.295-6.557 9.066-1.702 7.561 0.168 19.128 9.392 20.562 4.136 0.643 7.722-1.02 10.489-4.04l0.878 0.975c0.306 0.34 0.895 0.671 0.554 1.056-1.316 1.483-2.877 2.761-4.688 3.59-3.295 1.509-7.318 1.506-10.679 0.192-6.837-2.674-9.469-10.225-9.469-17.043z m28.564-0.1c0-4.445 0.987-9.1 3.751-12.682a13.205 13.205 0 0 1 9.655-5.129c3.81-0.243 7.601 0.995 10.348 3.684 3.049 2.984 4.49 7.224 4.894 11.392 0.787 8.135-2.045 18.335-11.04 20.455-3.728 0.879-7.807 0.207-10.936-2.037-3.38-2.424-5.331-6.324-6.153-10.323a26.72 26.72 0 0 1-0.519-5.36z m25.832 0c0-4.287-0.935-8.999-4.014-12.188-2.592-2.685-6.525-3.676-10.125-2.77-8.926 2.246-10.015 14.589-7.749 21.867 0.873 2.805 2.482 5.477 5.005 7.079 2.375 1.509 5.388 1.892 8.1 1.191 6.591-1.704 8.783-9.142 8.783-15.179z m9.386 15.512c0-3.358 4.859-3.356 4.859 0 0 3.315-4.859 3.314-4.859 0z m24.002-32.731c0.284 0 2.859-0.015 2.859 0.015v31.896c0 0.373-0.008 0.311 0.38 0.311h15.211c0.474 0 0.205 1.953 0.205 2.398 0 0.156-13.442 0.077-14.625 0.077-0.34 0-4.029 0.116-4.029-0.096v-4.283-30.304l-0.001-0.014z m25.898 2.43h-10.681c-0.508 0-0.225-1.936-0.225-2.41 0-0.04 12.664-0.02 13.563-0.02H965.869c0.663 0 0.296 1.344 0.296 1.856 0 0.268 0.138 0.574-0.163 0.574H956.058c-0.319 0-0.828-0.187-0.828 0.194v32.004c0 0.126-2.442 0.058-2.747 0.058-0.322 0-0.147-2.827-0.147-3.177v-18.069l-0.001-11.01z m20.426-2.43c5.607 0 12.083-0.826 17.112 2.145 7.084 4.185 8.117 14.26 6.199 21.53-0.946 3.584-2.972 6.848-6.185 8.802-2.941 1.788-6.315 2.209-9.692 2.209H973.697c-0.125 0-0.845 0.096-0.935 0-0.096-0.103 0-0.762 0-0.894v-2.437-31.175l-0.001-0.18z m7.901 32.256c3.884 0 7.775-1.224 10.216-4.395 2.475-3.214 3.068-7.522 2.955-11.468-0.108-3.802-1.007-7.874-3.781-10.655-2.581-2.588-6.19-3.354-9.728-3.354h-4.254c-0.559 0-0.45 0.018-0.45 0.543v29.199c0 0.338 1.459 0.14 1.737 0.14 1.087 0 2.237 0.072 3.305-0.01z m0 0"></path>
        </svg>
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">
          <a href="https://www.h5ds.com" target="_blank" rel="noreferrer">
            编辑器
          </a>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/logs">更新记录</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <a href="https://github.com/h5ds/h5ds-ui" target="_blank" rel="noreferrer">
            github
          </a>
        </Menu.Item>
      </Menu>
    </Header>
  );
}
