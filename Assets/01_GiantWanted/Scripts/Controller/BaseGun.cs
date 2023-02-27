using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
public class BaseGun : MonoBehaviour
{
    public GameObject gun;
    public GameObject canvasGun;
    [SerializeField] protected Vector3 loadBulletPos;
    [SerializeField] protected Vector3 loadBulletRot;
    public ParticleSystem fireFx;
    public BulletController prefBullet;
    public Transform pointShoot;
    [HideInInspector] public GameObject bulletObject;
    public float shootForce;
    public bool isShootBulletFollowCamera;
    [HideInInspector] public BaseEnemy hitObject;
    public void Preparing()
    {
        GlobalInstance.Instance.gameManagerInstance.soundManager.PlayReload1();
        StartCoroutine(HelperUtility.StartAction(() => { GlobalInstance.Instance.gameManagerInstance.soundManager.PlayReload2(); }, 0.18f));
        StartCoroutine(HelperUtility.StartAction(() => { GlobalInstance.Instance.gameManagerInstance.soundManager.PlayReload3(); }, 0.35f));
        gameObject.transform.DOLocalMove(loadBulletPos, 0.3f).OnComplete(() =>
        {
            //SoundManager.Instance.PlayReloadSoundFx();
            gameObject.transform.DOLocalRotate(loadBulletRot, 0.3f).OnComplete(() =>
            {
                gameObject.transform.DOLocalRotate(new Vector3(0, 0, 0f), 0.2f).OnComplete(() =>
                {

                    gameObject.transform.DOLocalMove(new Vector3(0.9f, -2f, 1f), 0.3f).SetEase(Ease.OutExpo).OnComplete(() =>
                    {
                        GlobalInstance.Instance.gameManagerInstance.controllerOnPoint.isInteractive = true;
                    });
                });
            });
        });
    }
    public void ExploreFx()
    {
        fireFx.Play();
    }
    public void FireBullet()
    {
        CheckTargetToTakeDamage();
        if (isShootBulletFollowCamera)
        {
            bulletObject = SimplePool.Spawn(prefBullet.gameObject, new Vector3(pointShoot.transform.position.x, pointShoot.transform.position.y - 4.5f, pointShoot.transform.position.z), Quaternion.identity);
            float duration = hitObject.pointLastShootCam.position.z / 12;
            bulletObject.transform.DOMove(hitObject.pointLastShootCam.position, duration);
            bulletObject.GetComponent<Rigidbody>().useGravity = false;
            GlobalInstance.Instance.gameManagerInstance.cameraController.SetUpLastShootCamera();
            GlobalInstance.Instance.gameManagerInstance.isShootLastBullet = true;
            gun.SetActive(false);
            canvasGun.SetActive(false);
            GlobalInstance.Instance.gameManagerInstance.SetUpWhenShotMissed();
            StartCoroutine(IEDelaySetup(duration - duration / 2));
            GlobalInstance.Instance.gameManagerInstance.soundManager.PlaySoundShoot();

        }
        else
        {
            bulletObject = SimplePool.Spawn(prefBullet.gameObject, new Vector3(pointShoot.transform.position.x, pointShoot.transform.position.y - 4.5f, pointShoot.transform.position.z), Quaternion.identity);
            var bulletRigid = bulletObject.GetComponent<Rigidbody>();
            bulletRigid.AddForce(pointShoot.transform.forward * shootForce, ForceMode.Impulse);
            GlobalInstance.Instance.gameManagerInstance.soundManager.PlaySoundShoot();
        }
    }
    void CheckTargetToTakeDamage()
    {
        RaycastHit hit;
        if (Physics.Raycast(pointShoot.transform.position, pointShoot.transform.forward, out hit, Mathf.Infinity))
        {
            if (hit.transform.CompareTag(NameTag.Enemy))
            {
                hitObject = hit.transform.gameObject.GetComponentInParent<BaseEnemy>();
                if (hitObject.currentHp < hitObject.hp)
                {
                    isShootBulletFollowCamera = true;
                }

            }
        }
    }
    IEnumerator IEDelaySetup(float time)
    {
        yield return new WaitForSeconds(time);
        bulletObject.gameObject.transform.DOKill();
        bulletObject.SetActive(false);
        GlobalInstance.Instance.gameManagerInstance.SetUpToEnd();
        GlobalInstance.Instance.gameManagerInstance.SetUpCameraEnd();
    }
}
