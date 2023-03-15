import React from "react";

export default function Following() {
  <div class="container-fluid">
    <div class="row subContainer gx-5">
      <div class="col-5 followlist-central-box">
        <div class="row new-tweet-box">
          <div class="col-1 mt-4">
            <a href={`/profile/${userFollowing.username}`} class="text-black">
              <i class="fa-sharp fa-solid fa-arrow-left"></i>
            </a>
          </div>
          <div class="col-11 mt-2">
            <h1 class="follower-name">
              {userFollowing.firstname} {userFollowing.lastname}
            </h1>
            <h2 class="follower-username fw-light text-secondary">
              @{userFollowing.username}
            </h2>
          </div>
          <div class="col-6 mt-3 text-center mb-3">
            <a
              class="link-follow"
              href={`/profile/${userFollowing.username}/followers`}
            >
              Followers
            </a>
          </div>
          <div class="col-6 mt-3 text-center mb-3 position-relative">
            <a
              class="link-follow"
              href={`/profile/${userFollowing.username}/following`}
            >
              Following
            </a>
            <span class="active-section-border-follow"></span>
          </div>
        </div>

        {userFollowing.following.map((followed) => {
          <div class="row tweet-list mt-3">
            <div class="col-2 text-center">
              <a href={`/profile/${followed.username}`}>
                <img
                  src={followed.image}
                  alt=""
                  class="rounded-circle follow-tweet-profile-img"
                />
              </a>
            </div>
            <div class="col-7">
              <a
                href={`/profile/${followed.username}`}
                class="text-decoration-none"
              >
                <h4 class="follow-content follow-title">
                  {followed.firstname}
                </h4>
                <h4 class="follow-content follow-subtitle text-secondary fw-light">
                  @{followed.username}
                </h4>
              </a>
            </div>
            <div class="col-2">
              {user.following.includes(followed._id) ? (
                <a
                  href={`/${followed._id}/follow`}
                  class="text-decoration-none btn following-btn-medium text-black rounded-pill mt-2 ms-3"
                >
                  Following
                </a>
              ) : (
                <a
                  href={`/${followed._id}/follow`}
                  class="text-decoration-none btn follow-btn-medium text-white rounded-pill mt-2 ms-3"
                >
                  Follow
                </a>
              )}
            </div>
          </div>;
        })}
      </div>
    </div>
  </div>;
}
