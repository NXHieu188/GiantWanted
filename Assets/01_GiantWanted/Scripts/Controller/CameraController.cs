using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class CameraController : MonoBehaviour
{
    public bool isLastShootCamera;
    private Transform posFollow;
    void Init()
    {

    }
    private void LateUpdate()
    {
        if (isLastShootCamera && !GlobalInstance.Instance.gameManagerInstance.isSetToEnd)
        {
            Vector3 relativePos = GlobalInstance.Instance.gameManagerInstance.baseGun.bulletObject.transform.position - transform.position;
            Quaternion lookRotation = Quaternion.LookRotation(relativePos, Vector3.up);
            transform.rotation = Quaternion.RotateTowards(transform.rotation, lookRotation, 0.2f);
            //transform.position = posFollow.transform.position;
            transform.position = Vector3.MoveTowards(transform.position, posFollow.transform.position, 0.4f);
        }
    }
    public void SetUpLastShootCamera()
    {
        StartCoroutine(IESetUp(0.5f));
    }
    IEnumerator IESetUp(float times)
    {
        yield return new WaitForSeconds(0.2f);
        var bulletCamera = GlobalInstance.Instance.gameManagerInstance.baseGun.bulletObject.GetComponent<BulletController>().transBulletCamera;
        var bulletCamera2 = GlobalInstance.Instance.gameManagerInstance.baseGun.bulletObject.GetComponent<BulletController>().transBulletCamera2;
        transform.position = bulletCamera.transform.position;
        //transform.rotation = bulletCamera.transform.rotation;
        isLastShootCamera = true;
        posFollow = bulletCamera2.transform;

    }
}
