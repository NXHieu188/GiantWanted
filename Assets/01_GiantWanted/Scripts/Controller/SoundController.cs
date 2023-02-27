using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundController : Singleton<SoundController>
{
    public AudioSource audioSourceFX;
    public AudioSource audioSourceBG;
    public AudioClip clipGiantWalk, clipShoot, clipReload1, clipReload2, clipReload3, clipGiantHit;
    public void PlaySoundShoot()
    {
        PlaySoundFX(clipShoot);
    }
    public void PlaySoundGiantHit()
    {
        PlaySoundFX(clipGiantHit);
    }
    public void PlayReload1()
    {
        PlaySoundFX(clipReload1);
    }
    public void PlayReload2()
    {
        PlaySoundFX(clipReload2);
    }
    public void PlayReload3()
    {
        PlaySoundFX(clipReload3);
    }
    void PlaySoundFX(AudioClip audioClip)
    {
        audioSourceFX.clip = audioClip;
        audioSourceFX.Play();
    }
    public void PlaySoundBG()
    {
        audioSourceBG.Play();
    }
    public void StopSound()
    {
        audioSourceBG.Stop();
        audioSourceFX.Stop();
    }
}
