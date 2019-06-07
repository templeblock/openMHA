"use strict";
// This file is part of the HörTech Open Master Hearing Aid (openMHA)
// Copyright © 2018 HörTech gGmbH
//
// openMHA is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, version 3 of the License.
//
// openMHA is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License, version 3 for more details.
//
// You should have received a copy of the GNU Affero General Public License, 
// version 3 along with openMHA.  If not, see <http://www.gnu.org/licenses/>.

/*
 * Display video from the webcam
 */

navigator.mediaDevices.getUserMedia({video: true})
.then(function(localMediaStream) {
    var video = document.querySelector('video');
    video.srcObject = localMediaStream;
    video.onloadedmetadata = function(e) {
        video.play();
        video_onopen();
    };
})
.catch(function(e) {
    console.log('WebCam access rejected by the user!', e);
});