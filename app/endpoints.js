exports.types = {
  jpg: {
    extension: 'jpg',
    outputOptions: ['-pix_fmt yuv422p']
  },
  m4a: {
    extension: 'm4a',
    outputOptions: ['-codec:a libfdk_aac']
  },
  mp3: {
    extension: 'mp3',
    outputOptions: ['-codec:a libmp3lame']
  },
  mp4: {
    extension: 'mp4',
    outputOptions: [
      '-codec:v libx264',
      '-profile:v high',
      '-r 15',
      '-crf 23',
      '-preset ultrafast',
      '-b:v 500k',
      '-maxrate 500k',
      '-bufsize 1000k',
      '-vf scale=-2:640',
      '-threads 8',
      '-codec:a libfdk_aac',
      '-b:a 128k'
    ]
  },
  wavMono: {
    extension: 'wav',
    outputOptions: ['-ac 1', '-codec pcm_s16le', '-ar 22050']
  },
  wav: {
    extension: 'wav'
  },
  screenshot: {
    extension: 'jpg',
    outputOptions: ['-ss', '00:00:01', '-vf', 'scale=800:-1', '-vframes', '1']
  }
};
