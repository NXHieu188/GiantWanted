var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4104 = root || request.c( 'UnityEngine.JointSpring' )
  var i4105 = data
  i4104.spring = i4105[0]
  i4104.damper = i4105[1]
  i4104.targetPosition = i4105[2]
  return i4104
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4106 = root || request.c( 'UnityEngine.JointMotor' )
  var i4107 = data
  i4106.m_TargetVelocity = i4107[0]
  i4106.m_Force = i4107[1]
  i4106.m_FreeSpin = i4107[2]
  return i4106
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4108 = root || request.c( 'UnityEngine.JointLimits' )
  var i4109 = data
  i4108.m_Min = i4109[0]
  i4108.m_Max = i4109[1]
  i4108.m_Bounciness = i4109[2]
  i4108.m_BounceMinVelocity = i4109[3]
  i4108.m_ContactDistance = i4109[4]
  i4108.minBounce = i4109[5]
  i4108.maxBounce = i4109[6]
  return i4108
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4110 = root || request.c( 'UnityEngine.JointDrive' )
  var i4111 = data
  i4110.m_PositionSpring = i4111[0]
  i4110.m_PositionDamper = i4111[1]
  i4110.m_MaximumForce = i4111[2]
  return i4110
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4112 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4113 = data
  i4112.m_Spring = i4113[0]
  i4112.m_Damper = i4113[1]
  return i4112
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4114 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4115 = data
  i4114.m_Limit = i4115[0]
  i4114.m_Bounciness = i4115[1]
  i4114.m_ContactDistance = i4115[2]
  return i4114
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4116 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4117 = data
  i4116.m_ExtremumSlip = i4117[0]
  i4116.m_ExtremumValue = i4117[1]
  i4116.m_AsymptoteSlip = i4117[2]
  i4116.m_AsymptoteValue = i4117[3]
  i4116.m_Stiffness = i4117[4]
  return i4116
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4118 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4119 = data
  i4118.m_LowerAngle = i4119[0]
  i4118.m_UpperAngle = i4119[1]
  return i4118
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4120 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4121 = data
  i4120.m_MotorSpeed = i4121[0]
  i4120.m_MaximumMotorTorque = i4121[1]
  return i4120
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4122 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4123 = data
  i4122.m_DampingRatio = i4123[0]
  i4122.m_Frequency = i4123[1]
  i4122.m_Angle = i4123[2]
  return i4122
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4124 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4125 = data
  i4124.m_LowerTranslation = i4125[0]
  i4124.m_UpperTranslation = i4125[1]
  return i4124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4126 = root || new pc.UnityMaterial()
  var i4127 = data
  i4126.name = i4127[0]
  request.r(i4127[1], i4127[2], 0, i4126, 'shader')
  i4126.renderQueue = i4127[3]
  i4126.enableInstancing = !!i4127[4]
  var i4129 = i4127[5]
  var i4128 = []
  for(var i = 0; i < i4129.length; i += 1) {
    i4128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4129[i + 0]) );
  }
  i4126.floatParameters = i4128
  var i4131 = i4127[6]
  var i4130 = []
  for(var i = 0; i < i4131.length; i += 1) {
    i4130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4131[i + 0]) );
  }
  i4126.colorParameters = i4130
  var i4133 = i4127[7]
  var i4132 = []
  for(var i = 0; i < i4133.length; i += 1) {
    i4132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4133[i + 0]) );
  }
  i4126.vectorParameters = i4132
  var i4135 = i4127[8]
  var i4134 = []
  for(var i = 0; i < i4135.length; i += 1) {
    i4134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4135[i + 0]) );
  }
  i4126.textureParameters = i4134
  var i4137 = i4127[9]
  var i4136 = []
  for(var i = 0; i < i4137.length; i += 1) {
    i4136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4137[i + 0]) );
  }
  i4126.materialFlags = i4136
  return i4126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4141 = data
  i4140.name = i4141[0]
  i4140.value = i4141[1]
  return i4140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4145 = data
  i4144.name = i4145[0]
  i4144.value = new pc.Color(i4145[1], i4145[2], i4145[3], i4145[4])
  return i4144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4149 = data
  i4148.name = i4149[0]
  i4148.value = new pc.Vec4( i4149[1], i4149[2], i4149[3], i4149[4] )
  return i4148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4153 = data
  i4152.name = i4153[0]
  request.r(i4153[1], i4153[2], 0, i4152, 'value')
  return i4152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4157 = data
  i4156.name = i4157[0]
  i4156.enabled = !!i4157[1]
  return i4156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4159 = data
  i4158.name = i4159[0]
  i4158.halfPrecision = !!i4159[1]
  i4158.vertexCount = i4159[2]
  i4158.aabb = i4159[3]
  var i4161 = i4159[4]
  var i4160 = []
  for(var i = 0; i < i4161.length; i += 1) {
    i4160.push( !!i4161[i + 0] );
  }
  i4158.streams = i4160
  i4158.vertices = i4159[5]
  var i4163 = i4159[6]
  var i4162 = []
  for(var i = 0; i < i4163.length; i += 1) {
    i4162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4163[i + 0]) );
  }
  i4158.subMeshes = i4162
  var i4165 = i4159[7]
  var i4164 = []
  for(var i = 0; i < i4165.length; i += 16) {
    i4164.push( new pc.Mat4().setData(i4165[i + 0], i4165[i + 1], i4165[i + 2], i4165[i + 3],  i4165[i + 4], i4165[i + 5], i4165[i + 6], i4165[i + 7],  i4165[i + 8], i4165[i + 9], i4165[i + 10], i4165[i + 11],  i4165[i + 12], i4165[i + 13], i4165[i + 14], i4165[i + 15]) );
  }
  i4158.bindposes = i4164
  var i4167 = i4159[8]
  var i4166 = []
  for(var i = 0; i < i4167.length; i += 1) {
    i4166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4167[i + 0]) );
  }
  i4158.blendShapes = i4166
  return i4158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4173 = data
  i4172.triangles = i4173[0]
  return i4172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4179 = data
  i4178.name = i4179[0]
  var i4181 = i4179[1]
  var i4180 = []
  for(var i = 0; i < i4181.length; i += 1) {
    i4180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4181[i + 0]) );
  }
  i4178.frames = i4180
  return i4178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4183 = data
  i4182.name = i4183[0]
  i4182.width = i4183[1]
  i4182.height = i4183[2]
  i4182.mipmapCount = i4183[3]
  i4182.anisoLevel = i4183[4]
  i4182.filterMode = i4183[5]
  i4182.hdr = !!i4183[6]
  i4182.format = i4183[7]
  i4182.wrapMode = i4183[8]
  i4182.alphaIsTransparency = !!i4183[9]
  i4182.alphaSource = i4183[10]
  return i4182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4185 = data
  i4184.position = new pc.Vec3( i4185[0], i4185[1], i4185[2] )
  i4184.scale = new pc.Vec3( i4185[3], i4185[4], i4185[5] )
  i4184.rotation = new pc.Quat(i4185[6], i4185[7], i4185[8], i4185[9])
  return i4184
}

Deserializers["BulletController"] = function (request, data, root) {
  var i4186 = root || request.c( 'BulletController' )
  var i4187 = data
  request.r(i4187[0], i4187[1], 0, i4186, 'bloodFx')
  request.r(i4187[2], i4187[3], 0, i4186, 'transBulletCamera')
  request.r(i4187[4], i4187[5], 0, i4186, 'transBulletCamera2')
  i4186.damage = i4187[6]
  i4186.force = i4187[7]
  return i4186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i4188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i4189 = data
  i4188.mass = i4189[0]
  i4188.drag = i4189[1]
  i4188.angularDrag = i4189[2]
  i4188.useGravity = !!i4189[3]
  i4188.isKinematic = !!i4189[4]
  i4188.constraints = i4189[5]
  i4188.maxAngularVelocity = i4189[6]
  i4188.collisionDetectionMode = i4189[7]
  i4188.interpolation = i4189[8]
  return i4188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i4190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i4191 = data
  i4190.center = new pc.Vec3( i4191[0], i4191[1], i4191[2] )
  i4190.radius = i4191[3]
  i4190.height = i4191[4]
  i4190.direction = i4191[5]
  i4190.enabled = !!i4191[6]
  i4190.isTrigger = !!i4191[7]
  request.r(i4191[8], i4191[9], 0, i4190, 'material')
  return i4190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i4192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i4193 = data
  request.r(i4193[0], i4193[1], 0, i4192, 'sharedMesh')
  return i4192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i4194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i4195 = data
  request.r(i4195[0], i4195[1], 0, i4194, 'additionalVertexStreams')
  i4194.enabled = !!i4195[2]
  request.r(i4195[3], i4195[4], 0, i4194, 'sharedMaterial')
  var i4197 = i4195[5]
  var i4196 = []
  for(var i = 0; i < i4197.length; i += 2) {
  request.r(i4197[i + 0], i4197[i + 1], 2, i4196, '')
  }
  i4194.sharedMaterials = i4196
  i4194.receiveShadows = !!i4195[6]
  i4194.shadowCastingMode = i4195[7]
  i4194.sortingLayerID = i4195[8]
  i4194.sortingOrder = i4195[9]
  i4194.lightmapIndex = i4195[10]
  i4194.lightmapSceneIndex = i4195[11]
  i4194.lightmapScaleOffset = new pc.Vec4( i4195[12], i4195[13], i4195[14], i4195[15] )
  i4194.lightProbeUsage = i4195[16]
  i4194.reflectionProbeUsage = i4195[17]
  return i4194
}

Deserializers["BulletRotation"] = function (request, data, root) {
  var i4200 = root || request.c( 'BulletRotation' )
  var i4201 = data
  return i4200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i4202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i4203 = data
  i4202.enabled = !!i4203[0]
  request.r(i4203[1], i4203[2], 0, i4202, 'sharedMaterial')
  var i4205 = i4203[3]
  var i4204 = []
  for(var i = 0; i < i4205.length; i += 2) {
  request.r(i4205[i + 0], i4205[i + 1], 2, i4204, '')
  }
  i4202.sharedMaterials = i4204
  i4202.receiveShadows = !!i4203[4]
  i4202.shadowCastingMode = i4203[5]
  i4202.sortingLayerID = i4203[6]
  i4202.sortingOrder = i4203[7]
  i4202.lightmapIndex = i4203[8]
  i4202.lightmapSceneIndex = i4203[9]
  i4202.lightmapScaleOffset = new pc.Vec4( i4203[10], i4203[11], i4203[12], i4203[13] )
  i4202.lightProbeUsage = i4203[14]
  i4202.reflectionProbeUsage = i4203[15]
  var i4207 = i4203[16]
  var i4206 = []
  for(var i = 0; i < i4207.length; i += 3) {
    i4206.push( new pc.Vec3( i4207[i + 0], i4207[i + 1], i4207[i + 2] ) );
  }
  i4202.positions = i4206
  i4202.positionCount = i4203[17]
  i4202.time = i4203[18]
  i4202.startWidth = i4203[19]
  i4202.endWidth = i4203[20]
  i4202.widthMultiplier = i4203[21]
  i4202.autodestruct = !!i4203[22]
  i4202.emitting = !!i4203[23]
  i4202.numCornerVertices = i4203[24]
  i4202.numCapVertices = i4203[25]
  i4202.minVertexDistance = i4203[26]
  i4202.colorGradient = i4203[27] ? new pc.ColorGradient(i4203[27][0], i4203[27][1], i4203[27][2]) : null
  i4202.startColor = new pc.Color(i4203[28], i4203[29], i4203[30], i4203[31])
  i4202.endColor = new pc.Color(i4203[32], i4203[33], i4203[34], i4203[35])
  i4202.generateLightingData = !!i4203[36]
  i4202.textureMode = i4203[37]
  i4202.alignment = i4203[38]
  i4202.widthCurve = new pc.AnimationCurve( { keys_flow: i4203[39] } )
  return i4202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4211 = data
  i4210.name = i4211[0]
  i4210.tag = i4211[1]
  i4210.enabled = !!i4211[2]
  i4210.isStatic = !!i4211[3]
  i4210.layer = i4211[4]
  return i4210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4213 = data
  i4212.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4213[0], i4212.main)
  i4212.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4213[1], i4212.colorBySpeed)
  i4212.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4213[2], i4212.colorOverLifetime)
  i4212.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4213[3], i4212.emission)
  i4212.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4213[4], i4212.rotationBySpeed)
  i4212.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4213[5], i4212.rotationOverLifetime)
  i4212.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4213[6], i4212.shape)
  i4212.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4213[7], i4212.sizeBySpeed)
  i4212.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4213[8], i4212.sizeOverLifetime)
  i4212.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4213[9], i4212.textureSheetAnimation)
  i4212.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4213[10], i4212.velocityOverLifetime)
  i4212.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4213[11], i4212.noise)
  i4212.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4213[12], i4212.inheritVelocity)
  i4212.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4213[13], i4212.forceOverLifetime)
  i4212.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4213[14], i4212.limitVelocityOverLifetime)
  i4212.useAutoRandomSeed = !!i4213[15]
  i4212.randomSeed = i4213[16]
  return i4212
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4214 = root || new pc.ParticleSystemMain()
  var i4215 = data
  i4214.duration = i4215[0]
  i4214.loop = !!i4215[1]
  i4214.prewarm = !!i4215[2]
  i4214.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4215[3], i4214.startDelay)
  i4214.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4215[4], i4214.startLifetime)
  i4214.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4215[5], i4214.startSpeed)
  i4214.startSize3D = !!i4215[6]
  i4214.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4215[7], i4214.startSizeX)
  i4214.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4215[8], i4214.startSizeY)
  i4214.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4215[9], i4214.startSizeZ)
  i4214.startRotation3D = !!i4215[10]
  i4214.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4215[11], i4214.startRotationX)
  i4214.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4215[12], i4214.startRotationY)
  i4214.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4215[13], i4214.startRotationZ)
  i4214.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4215[14], i4214.startColor)
  i4214.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4215[15], i4214.gravityModifier)
  i4214.simulationSpace = i4215[16]
  request.r(i4215[17], i4215[18], 0, i4214, 'customSimulationSpace')
  i4214.simulationSpeed = i4215[19]
  i4214.useUnscaledTime = !!i4215[20]
  i4214.scalingMode = i4215[21]
  i4214.playOnAwake = !!i4215[22]
  i4214.maxParticles = i4215[23]
  i4214.emitterVelocityMode = i4215[24]
  return i4214
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4216 = root || new pc.MinMaxCurve()
  var i4217 = data
  i4216.mode = i4217[0]
  i4216.curveMin = new pc.AnimationCurve( { keys_flow: i4217[1] } )
  i4216.curveMax = new pc.AnimationCurve( { keys_flow: i4217[2] } )
  i4216.curveMultiplier = i4217[3]
  i4216.constantMin = i4217[4]
  i4216.constantMax = i4217[5]
  return i4216
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4218 = root || new pc.MinMaxGradient()
  var i4219 = data
  i4218.mode = i4219[0]
  i4218.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4219[1], i4218.gradientMin)
  i4218.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4219[2], i4218.gradientMax)
  i4218.colorMin = new pc.Color(i4219[3], i4219[4], i4219[5], i4219[6])
  i4218.colorMax = new pc.Color(i4219[7], i4219[8], i4219[9], i4219[10])
  return i4218
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4221 = data
  i4220.mode = i4221[0]
  var i4223 = i4221[1]
  var i4222 = []
  for(var i = 0; i < i4223.length; i += 1) {
    i4222.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4223[i + 0]) );
  }
  i4220.colorKeys = i4222
  var i4225 = i4221[2]
  var i4224 = []
  for(var i = 0; i < i4225.length; i += 1) {
    i4224.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4225[i + 0]) );
  }
  i4220.alphaKeys = i4224
  return i4220
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4226 = root || new pc.ParticleSystemColorBySpeed()
  var i4227 = data
  i4226.enabled = !!i4227[0]
  i4226.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4227[1], i4226.color)
  i4226.range = new pc.Vec2( i4227[2], i4227[3] )
  return i4226
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4231 = data
  i4230.color = new pc.Color(i4231[0], i4231[1], i4231[2], i4231[3])
  i4230.time = i4231[4]
  return i4230
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4235 = data
  i4234.alpha = i4235[0]
  i4234.time = i4235[1]
  return i4234
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4236 = root || new pc.ParticleSystemColorOverLifetime()
  var i4237 = data
  i4236.enabled = !!i4237[0]
  i4236.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4237[1], i4236.color)
  return i4236
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4238 = root || new pc.ParticleSystemEmitter()
  var i4239 = data
  i4238.enabled = !!i4239[0]
  i4238.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4239[1], i4238.rateOverTime)
  i4238.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4239[2], i4238.rateOverDistance)
  var i4241 = i4239[3]
  var i4240 = []
  for(var i = 0; i < i4241.length; i += 1) {
    i4240.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4241[i + 0]) );
  }
  i4238.bursts = i4240
  return i4238
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4244 = root || new pc.ParticleSystemBurst()
  var i4245 = data
  i4244.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4245[0], i4244.count)
  i4244.cycleCount = i4245[1]
  i4244.minCount = i4245[2]
  i4244.maxCount = i4245[3]
  i4244.repeatInterval = i4245[4]
  i4244.time = i4245[5]
  return i4244
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4246 = root || new pc.ParticleSystemRotationBySpeed()
  var i4247 = data
  i4246.enabled = !!i4247[0]
  i4246.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4247[1], i4246.x)
  i4246.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4247[2], i4246.y)
  i4246.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4247[3], i4246.z)
  i4246.separateAxes = !!i4247[4]
  i4246.range = new pc.Vec2( i4247[5], i4247[6] )
  return i4246
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4248 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4249 = data
  i4248.enabled = !!i4249[0]
  i4248.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4249[1], i4248.x)
  i4248.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4249[2], i4248.y)
  i4248.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4249[3], i4248.z)
  i4248.separateAxes = !!i4249[4]
  return i4248
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4250 = root || new pc.ParticleSystemShape()
  var i4251 = data
  i4250.enabled = !!i4251[0]
  i4250.shapeType = i4251[1]
  i4250.randomDirectionAmount = i4251[2]
  i4250.sphericalDirectionAmount = i4251[3]
  i4250.randomPositionAmount = i4251[4]
  i4250.alignToDirection = !!i4251[5]
  i4250.radius = i4251[6]
  i4250.radiusMode = i4251[7]
  i4250.radiusSpread = i4251[8]
  i4250.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4251[9], i4250.radiusSpeed)
  i4250.radiusThickness = i4251[10]
  i4250.angle = i4251[11]
  i4250.length = i4251[12]
  i4250.boxThickness = new pc.Vec3( i4251[13], i4251[14], i4251[15] )
  i4250.meshShapeType = i4251[16]
  request.r(i4251[17], i4251[18], 0, i4250, 'mesh')
  request.r(i4251[19], i4251[20], 0, i4250, 'meshRenderer')
  request.r(i4251[21], i4251[22], 0, i4250, 'skinnedMeshRenderer')
  i4250.useMeshMaterialIndex = !!i4251[23]
  i4250.meshMaterialIndex = i4251[24]
  i4250.useMeshColors = !!i4251[25]
  i4250.normalOffset = i4251[26]
  i4250.arc = i4251[27]
  i4250.arcMode = i4251[28]
  i4250.arcSpread = i4251[29]
  i4250.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4251[30], i4250.arcSpeed)
  i4250.donutRadius = i4251[31]
  i4250.position = new pc.Vec3( i4251[32], i4251[33], i4251[34] )
  i4250.rotation = new pc.Vec3( i4251[35], i4251[36], i4251[37] )
  i4250.scale = new pc.Vec3( i4251[38], i4251[39], i4251[40] )
  return i4250
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4252 = root || new pc.ParticleSystemSizeBySpeed()
  var i4253 = data
  i4252.enabled = !!i4253[0]
  i4252.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4253[1], i4252.x)
  i4252.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4253[2], i4252.y)
  i4252.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4253[3], i4252.z)
  i4252.separateAxes = !!i4253[4]
  i4252.range = new pc.Vec2( i4253[5], i4253[6] )
  return i4252
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4254 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4255 = data
  i4254.enabled = !!i4255[0]
  i4254.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4255[1], i4254.x)
  i4254.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4255[2], i4254.y)
  i4254.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4255[3], i4254.z)
  i4254.separateAxes = !!i4255[4]
  return i4254
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4256 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4257 = data
  i4256.enabled = !!i4257[0]
  i4256.mode = i4257[1]
  i4256.animation = i4257[2]
  i4256.numTilesX = i4257[3]
  i4256.numTilesY = i4257[4]
  i4256.useRandomRow = !!i4257[5]
  i4256.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4257[6], i4256.frameOverTime)
  i4256.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4257[7], i4256.startFrame)
  i4256.cycleCount = i4257[8]
  i4256.rowIndex = i4257[9]
  i4256.flipU = i4257[10]
  i4256.flipV = i4257[11]
  i4256.spriteCount = i4257[12]
  var i4259 = i4257[13]
  var i4258 = []
  for(var i = 0; i < i4259.length; i += 2) {
  request.r(i4259[i + 0], i4259[i + 1], 2, i4258, '')
  }
  i4256.sprites = i4258
  return i4256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4262 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4263 = data
  i4262.enabled = !!i4263[0]
  i4262.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4263[1], i4262.x)
  i4262.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4263[2], i4262.y)
  i4262.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4263[3], i4262.z)
  i4262.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4263[4], i4262.speedModifier)
  i4262.space = i4263[5]
  return i4262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4264 = root || new pc.ParticleSystemNoise()
  var i4265 = data
  i4264.enabled = !!i4265[0]
  i4264.separateAxes = !!i4265[1]
  i4264.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4265[2], i4264.strengthX)
  i4264.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4265[3], i4264.strengthY)
  i4264.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4265[4], i4264.strengthZ)
  i4264.frequency = i4265[5]
  i4264.damping = !!i4265[6]
  i4264.octaveCount = i4265[7]
  i4264.octaveMultiplier = i4265[8]
  i4264.octaveScale = i4265[9]
  i4264.quality = i4265[10]
  i4264.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4265[11], i4264.scrollSpeed)
  i4264.scrollSpeedMultiplier = i4265[12]
  i4264.remapEnabled = !!i4265[13]
  i4264.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4265[14], i4264.remapX)
  i4264.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4265[15], i4264.remapY)
  i4264.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4265[16], i4264.remapZ)
  i4264.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4265[17], i4264.positionAmount)
  i4264.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4265[18], i4264.rotationAmount)
  i4264.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4265[19], i4264.sizeAmount)
  return i4264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4266 = root || new pc.ParticleSystemInheritVelocity()
  var i4267 = data
  i4266.enabled = !!i4267[0]
  i4266.mode = i4267[1]
  i4266.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4267[2], i4266.curve)
  return i4266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4268 = root || new pc.ParticleSystemForceOverLifetime()
  var i4269 = data
  i4268.enabled = !!i4269[0]
  i4268.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4269[1], i4268.x)
  i4268.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4269[2], i4268.y)
  i4268.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4269[3], i4268.z)
  i4268.space = i4269[4]
  i4268.randomized = !!i4269[5]
  return i4268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4270 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4271 = data
  i4270.enabled = !!i4271[0]
  i4270.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4271[1], i4270.limitX)
  i4270.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4271[2], i4270.limitY)
  i4270.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4271[3], i4270.limitZ)
  i4270.dampen = i4271[4]
  i4270.separateAxes = !!i4271[5]
  i4270.space = i4271[6]
  i4270.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4271[7], i4270.drag)
  i4270.multiplyDragByParticleSize = !!i4271[8]
  i4270.multiplyDragByParticleVelocity = !!i4271[9]
  return i4270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4273 = data
  i4272.enabled = !!i4273[0]
  request.r(i4273[1], i4273[2], 0, i4272, 'sharedMaterial')
  var i4275 = i4273[3]
  var i4274 = []
  for(var i = 0; i < i4275.length; i += 2) {
  request.r(i4275[i + 0], i4275[i + 1], 2, i4274, '')
  }
  i4272.sharedMaterials = i4274
  i4272.receiveShadows = !!i4273[4]
  i4272.shadowCastingMode = i4273[5]
  i4272.sortingLayerID = i4273[6]
  i4272.sortingOrder = i4273[7]
  i4272.lightmapIndex = i4273[8]
  i4272.lightmapSceneIndex = i4273[9]
  i4272.lightmapScaleOffset = new pc.Vec4( i4273[10], i4273[11], i4273[12], i4273[13] )
  i4272.lightProbeUsage = i4273[14]
  i4272.reflectionProbeUsage = i4273[15]
  request.r(i4273[16], i4273[17], 0, i4272, 'mesh')
  i4272.meshCount = i4273[18]
  i4272.activeVertexStreamsCount = i4273[19]
  i4272.alignment = i4273[20]
  i4272.renderMode = i4273[21]
  i4272.sortMode = i4273[22]
  i4272.lengthScale = i4273[23]
  i4272.velocityScale = i4273[24]
  i4272.cameraVelocityScale = i4273[25]
  i4272.normalDirection = i4273[26]
  i4272.sortingFudge = i4273[27]
  i4272.minParticleSize = i4273[28]
  i4272.maxParticleSize = i4273[29]
  i4272.pivot = new pc.Vec3( i4273[30], i4273[31], i4273[32] )
  request.r(i4273[33], i4273[34], 0, i4272, 'trailMaterial')
  return i4272
}

Deserializers["AutoDestroy"] = function (request, data, root) {
  var i4276 = root || request.c( 'AutoDestroy' )
  var i4277 = data
  i4276.timeOut = i4277[0]
  i4276.typeDestroy = i4277[1]
  return i4276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i4278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i4279 = data
  i4278.name = i4279[0]
  i4278.atlasId = i4279[1]
  i4278.mipmapCount = i4279[2]
  i4278.hdr = !!i4279[3]
  i4278.size = i4279[4]
  i4278.anisoLevel = i4279[5]
  i4278.filterMode = i4279[6]
  i4278.wrapMode = i4279[7]
  var i4281 = i4279[8]
  var i4280 = []
  for(var i = 0; i < i4281.length; i += 4) {
    i4280.push( UnityEngine.Rect.MinMaxRect(i4281[i + 0], i4281[i + 1], i4281[i + 2], i4281[i + 3]) );
  }
  i4278.rects = i4280
  return i4278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4285 = data
  i4284.name = i4285[0]
  i4284.index = i4285[1]
  i4284.startup = !!i4285[2]
  return i4284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4287 = data
  i4286.enabled = !!i4287[0]
  i4286.aspect = i4287[1]
  i4286.orthographic = !!i4287[2]
  i4286.orthographicSize = i4287[3]
  i4286.backgroundColor = new pc.Color(i4287[4], i4287[5], i4287[6], i4287[7])
  i4286.nearClipPlane = i4287[8]
  i4286.farClipPlane = i4287[9]
  i4286.fieldOfView = i4287[10]
  i4286.depth = i4287[11]
  i4286.clearFlags = i4287[12]
  i4286.cullingMask = i4287[13]
  i4286.rect = i4287[14]
  request.r(i4287[15], i4287[16], 0, i4286, 'targetTexture')
  return i4286
}

Deserializers["CameraController"] = function (request, data, root) {
  var i4288 = root || request.c( 'CameraController' )
  var i4289 = data
  i4288.isLastShootCamera = !!i4289[0]
  return i4288
}

Deserializers["BaseGun"] = function (request, data, root) {
  var i4290 = root || request.c( 'BaseGun' )
  var i4291 = data
  request.r(i4291[0], i4291[1], 0, i4290, 'gun')
  request.r(i4291[2], i4291[3], 0, i4290, 'canvasGun')
  request.r(i4291[4], i4291[5], 0, i4290, 'fireFx')
  request.r(i4291[6], i4291[7], 0, i4290, 'prefBullet')
  request.r(i4291[8], i4291[9], 0, i4290, 'pointShoot')
  request.r(i4291[10], i4291[11], 0, i4290, 'bulletObject')
  i4290.shootForce = i4291[12]
  i4290.isShootBulletFollowCamera = !!i4291[13]
  request.r(i4291[14], i4291[15], 0, i4290, 'hitObject')
  i4290.loadBulletPos = new pc.Vec3( i4291[16], i4291[17], i4291[18] )
  i4290.loadBulletRot = new pc.Vec3( i4291[19], i4291[20], i4291[21] )
  return i4290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4293 = data
  i4292.pivot = new pc.Vec2( i4293[0], i4293[1] )
  i4292.anchorMin = new pc.Vec2( i4293[2], i4293[3] )
  i4292.anchorMax = new pc.Vec2( i4293[4], i4293[5] )
  i4292.sizeDelta = new pc.Vec2( i4293[6], i4293[7] )
  i4292.anchoredPosition3D = new pc.Vec3( i4293[8], i4293[9], i4293[10] )
  i4292.rotation = new pc.Quat(i4293[11], i4293[12], i4293[13], i4293[14])
  i4292.scale = new pc.Vec3( i4293[15], i4293[16], i4293[17] )
  return i4292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4295 = data
  i4294.enabled = !!i4295[0]
  i4294.planeDistance = i4295[1]
  i4294.referencePixelsPerUnit = i4295[2]
  i4294.isFallbackOverlay = !!i4295[3]
  i4294.renderMode = i4295[4]
  i4294.renderOrder = i4295[5]
  i4294.sortingLayerName = i4295[6]
  i4294.sortingOrder = i4295[7]
  i4294.scaleFactor = i4295[8]
  request.r(i4295[9], i4295[10], 0, i4294, 'worldCamera')
  i4294.overrideSorting = !!i4295[11]
  i4294.pixelPerfect = !!i4295[12]
  i4294.targetDisplay = i4295[13]
  i4294.overridePixelPerfect = !!i4295[14]
  return i4294
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4296 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4297 = data
  i4296.m_UiScaleMode = i4297[0]
  i4296.m_ReferencePixelsPerUnit = i4297[1]
  i4296.m_ScaleFactor = i4297[2]
  i4296.m_ReferenceResolution = new pc.Vec2( i4297[3], i4297[4] )
  i4296.m_ScreenMatchMode = i4297[5]
  i4296.m_MatchWidthOrHeight = i4297[6]
  i4296.m_PhysicalUnit = i4297[7]
  i4296.m_FallbackScreenDPI = i4297[8]
  i4296.m_DefaultSpriteDPI = i4297[9]
  i4296.m_DynamicPixelsPerUnit = i4297[10]
  i4296.m_PresetInfoIsWorld = !!i4297[11]
  return i4296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4299 = data
  i4298.cullTransparentMesh = !!i4299[0]
  return i4298
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4300 = root || request.c( 'UnityEngine.UI.Image' )
  var i4301 = data
  request.r(i4301[0], i4301[1], 0, i4300, 'm_Sprite')
  i4300.m_Type = i4301[2]
  i4300.m_PreserveAspect = !!i4301[3]
  i4300.m_FillCenter = !!i4301[4]
  i4300.m_FillMethod = i4301[5]
  i4300.m_FillAmount = i4301[6]
  i4300.m_FillClockwise = !!i4301[7]
  i4300.m_FillOrigin = i4301[8]
  i4300.m_UseSpriteMesh = !!i4301[9]
  i4300.m_PixelsPerUnitMultiplier = i4301[10]
  request.r(i4301[11], i4301[12], 0, i4300, 'm_Material')
  i4300.m_Maskable = !!i4301[13]
  i4300.m_Color = new pc.Color(i4301[14], i4301[15], i4301[16], i4301[17])
  i4300.m_RaycastTarget = !!i4301[18]
  i4300.m_RaycastPadding = new pc.Vec4( i4301[19], i4301[20], i4301[21], i4301[22] )
  return i4300
}

Deserializers["RotateObject"] = function (request, data, root) {
  var i4302 = root || request.c( 'RotateObject' )
  var i4303 = data
  i4302.duration = i4303[0]
  i4302.angle = i4303[1]
  return i4302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i4304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i4305 = data
  i4304.enabled = !!i4305[0]
  i4304.type = i4305[1]
  i4304.color = new pc.Color(i4305[2], i4305[3], i4305[4], i4305[5])
  i4304.cullingMask = i4305[6]
  i4304.intensity = i4305[7]
  i4304.range = i4305[8]
  i4304.spotAngle = i4305[9]
  i4304.shadows = i4305[10]
  i4304.shadowNormalBias = i4305[11]
  i4304.shadowBias = i4305[12]
  i4304.shadowStrength = i4305[13]
  i4304.lightmapBakeType = i4305[14]
  i4304.renderMode = i4305[15]
  request.r(i4305[16], i4305[17], 0, i4304, 'cookie')
  i4304.cookieSize = i4305[18]
  return i4304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i4306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i4307 = data
  i4306.enabled = !!i4307[0]
  i4306.isTrigger = !!i4307[1]
  request.r(i4307[2], i4307[3], 0, i4306, 'material')
  request.r(i4307[4], i4307[5], 0, i4306, 'sharedMesh')
  i4306.convex = !!i4307[6]
  return i4306
}

Deserializers["BuildingController"] = function (request, data, root) {
  var i4308 = root || request.c( 'BuildingController' )
  var i4309 = data
  request.r(i4309[0], i4309[1], 0, i4308, 'buildingCheck')
  request.r(i4309[2], i4309[3], 0, i4308, 'buildingRigid')
  return i4308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i4310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i4311 = data
  i4310.center = new pc.Vec3( i4311[0], i4311[1], i4311[2] )
  i4310.size = new pc.Vec3( i4311[3], i4311[4], i4311[5] )
  i4310.enabled = !!i4311[6]
  i4310.isTrigger = !!i4311[7]
  request.r(i4311[8], i4311[9], 0, i4310, 'material')
  return i4310
}

Deserializers["BaseEnemy"] = function (request, data, root) {
  var i4312 = root || request.c( 'BaseEnemy' )
  var i4313 = data
  i4312.hp = i4313[0]
  i4312.speed = i4313[1]
  request.r(i4313[2], i4313[3], 0, i4312, 'pointTargetMove')
  request.r(i4313[4], i4313[5], 0, i4312, 'anim')
  i4312.isHit = !!i4313[6]
  i4312.currentHp = i4313[7]
  request.r(i4313[8], i4313[9], 0, i4312, 'pointLastShootCam')
  i4312.posZEnd = i4313[10]
  request.r(i4313[11], i4313[12], 0, i4312, 'hpImg')
  request.r(i4313[13], i4313[14], 0, i4312, 'hpBar')
  return i4312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4315 = data
  request.r(i4315[0], i4315[1], 0, i4314, 'animatorController')
  i4314.updateMode = i4315[2]
  var i4317 = i4315[3]
  var i4316 = []
  for(var i = 0; i < i4317.length; i += 2) {
  request.r(i4317[i + 0], i4317[i + 1], 2, i4316, '')
  }
  i4314.humanBones = i4316
  i4314.enabled = !!i4315[4]
  return i4314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i4320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i4321 = data
  i4320.enabled = !!i4321[0]
  request.r(i4321[1], i4321[2], 0, i4320, 'sharedMaterial')
  var i4323 = i4321[3]
  var i4322 = []
  for(var i = 0; i < i4323.length; i += 2) {
  request.r(i4323[i + 0], i4323[i + 1], 2, i4322, '')
  }
  i4320.sharedMaterials = i4322
  i4320.receiveShadows = !!i4321[4]
  i4320.shadowCastingMode = i4321[5]
  i4320.sortingLayerID = i4321[6]
  i4320.sortingOrder = i4321[7]
  i4320.lightmapIndex = i4321[8]
  i4320.lightmapSceneIndex = i4321[9]
  i4320.lightmapScaleOffset = new pc.Vec4( i4321[10], i4321[11], i4321[12], i4321[13] )
  i4320.lightProbeUsage = i4321[14]
  i4320.reflectionProbeUsage = i4321[15]
  request.r(i4321[16], i4321[17], 0, i4320, 'sharedMesh')
  var i4325 = i4321[18]
  var i4324 = []
  for(var i = 0; i < i4325.length; i += 2) {
  request.r(i4325[i + 0], i4325[i + 1], 2, i4324, '')
  }
  i4320.bones = i4324
  i4320.updateWhenOffscreen = !!i4321[19]
  i4320.localBounds = i4321[20]
  request.r(i4321[21], i4321[22], 0, i4320, 'rootBone')
  var i4327 = i4321[23]
  var i4326 = []
  for(var i = 0; i < i4327.length; i += 1) {
    i4326.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i4327[i + 0]) );
  }
  i4320.blendShapesWeights = i4326
  return i4320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i4330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i4331 = data
  i4330.weight = i4331[0]
  return i4330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4333 = data
  i4332.enabled = !!i4333[0]
  request.r(i4333[1], i4333[2], 0, i4332, 'sharedMaterial')
  var i4335 = i4333[3]
  var i4334 = []
  for(var i = 0; i < i4335.length; i += 2) {
  request.r(i4335[i + 0], i4335[i + 1], 2, i4334, '')
  }
  i4332.sharedMaterials = i4334
  i4332.receiveShadows = !!i4333[4]
  i4332.shadowCastingMode = i4333[5]
  i4332.sortingLayerID = i4333[6]
  i4332.sortingOrder = i4333[7]
  i4332.lightmapIndex = i4333[8]
  i4332.lightmapSceneIndex = i4333[9]
  i4332.lightmapScaleOffset = new pc.Vec4( i4333[10], i4333[11], i4333[12], i4333[13] )
  i4332.lightProbeUsage = i4333[14]
  i4332.reflectionProbeUsage = i4333[15]
  i4332.color = new pc.Color(i4333[16], i4333[17], i4333[18], i4333[19])
  request.r(i4333[20], i4333[21], 0, i4332, 'sprite')
  i4332.flipX = !!i4333[22]
  i4332.flipY = !!i4333[23]
  i4332.drawMode = i4333[24]
  i4332.size = new pc.Vec2( i4333[25], i4333[26] )
  i4332.tileMode = i4333[27]
  i4332.adaptiveModeThreshold = i4333[28]
  i4332.maskInteraction = i4333[29]
  i4332.spriteSortPoint = i4333[30]
  return i4332
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4336 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4337 = data
  i4336.m_IgnoreReversedGraphics = !!i4337[0]
  i4336.m_BlockingObjects = i4337[1]
  i4336.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4337[2] )
  return i4336
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i4338 = root || request.c( 'UnityEngine.UI.Mask' )
  var i4339 = data
  i4338.m_ShowMaskGraphic = !!i4339[0]
  return i4338
}

Deserializers["ScopeController"] = function (request, data, root) {
  var i4340 = root || request.c( 'ScopeController' )
  var i4341 = data
  request.r(i4341[0], i4341[1], 0, i4340, 'bgFade')
  request.r(i4341[2], i4341[3], 0, i4340, 'mainScope')
  return i4340
}

Deserializers["CutOutMaskUI"] = function (request, data, root) {
  var i4342 = root || request.c( 'CutOutMaskUI' )
  var i4343 = data
  request.r(i4343[0], i4343[1], 0, i4342, 'm_Material')
  request.r(i4343[2], i4343[3], 0, i4342, 'm_Sprite')
  i4342.m_Type = i4343[4]
  i4342.m_PreserveAspect = !!i4343[5]
  i4342.m_FillCenter = !!i4343[6]
  i4342.m_FillMethod = i4343[7]
  i4342.m_FillAmount = i4343[8]
  i4342.m_FillClockwise = !!i4343[9]
  i4342.m_FillOrigin = i4343[10]
  i4342.m_UseSpriteMesh = !!i4343[11]
  i4342.m_PixelsPerUnitMultiplier = i4343[12]
  i4342.m_Maskable = !!i4343[13]
  i4342.m_Color = new pc.Color(i4343[14], i4343[15], i4343[16], i4343[17])
  i4342.m_RaycastTarget = !!i4343[18]
  i4342.m_RaycastPadding = new pc.Vec4( i4343[19], i4343[20], i4343[21], i4343[22] )
  return i4342
}

Deserializers["ControllerOnPointer"] = function (request, data, root) {
  var i4344 = root || request.c( 'ControllerOnPointer' )
  var i4345 = data
  request.r(i4345[0], i4345[1], 0, i4344, 'scopeOverlay')
  request.r(i4345[2], i4345[3], 0, i4344, 'sniperGun')
  i4344.isShooting = !!i4345[4]
  i4344.isInteractive = !!i4345[5]
  i4344.isCanShoot = !!i4345[6]
  i4344.gunMovingPos = new pc.Vec3( i4345[7], i4345[8], i4345[9] )
  i4344.FOVscoped = i4345[10]
  i4344.FOVcache = i4345[11]
  i4344.smoothTime = i4345[12]
  i4344.leftCamBound = i4345[13]
  i4344.upCamBound = i4345[14]
  i4344.rightCamBound = i4345[15]
  i4344.downCamBound = i4345[16]
  return i4344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i4346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i4347 = data
  i4346.playAutomatically = !!i4347[0]
  request.r(i4347[1], i4347[2], 0, i4346, 'clip')
  var i4349 = i4347[3]
  var i4348 = []
  for(var i = 0; i < i4349.length; i += 2) {
  request.r(i4349[i + 0], i4349[i + 1], 2, i4348, '')
  }
  i4346.clips = i4348
  i4346.wrapMode = i4347[4]
  i4346.enabled = !!i4347[5]
  return i4346
}

Deserializers["GameManager1"] = function (request, data, root) {
  var i4352 = root || request.c( 'GameManager1' )
  var i4353 = data
  request.r(i4353[0], i4353[1], 0, i4352, 'soundManager')
  request.r(i4353[2], i4353[3], 0, i4352, 'mainCamera')
  request.r(i4353[4], i4353[5], 0, i4352, 'cameraController')
  request.r(i4353[6], i4353[7], 0, i4352, 'controllerOnPoint')
  request.r(i4353[8], i4353[9], 0, i4352, 'baseEnemy')
  request.r(i4353[10], i4353[11], 0, i4352, 'baseGun')
  request.r(i4353[12], i4353[13], 0, i4352, 'positionCameraEndHuggyMove')
  i4352.isShootLastBullet = !!i4353[14]
  i4352.isSetToEnd = !!i4353[15]
  request.r(i4353[16], i4353[17], 0, i4352, 'house')
  i4352.fistTouch = !!i4353[18]
  request.r(i4353[19], i4353[20], 0, i4352, 'uiEndGame')
  request.r(i4353[21], i4353[22], 0, i4352, 'guide')
  i4352.isHasHouse = !!i4353[23]
  return i4352
}

Deserializers["SoundController"] = function (request, data, root) {
  var i4354 = root || request.c( 'SoundController' )
  var i4355 = data
  request.r(i4355[0], i4355[1], 0, i4354, 'audioSourceFX')
  request.r(i4355[2], i4355[3], 0, i4354, 'audioSourceBG')
  request.r(i4355[4], i4355[5], 0, i4354, 'clipGiantWalk')
  request.r(i4355[6], i4355[7], 0, i4354, 'clipShoot')
  request.r(i4355[8], i4355[9], 0, i4354, 'clipReload1')
  request.r(i4355[10], i4355[11], 0, i4354, 'clipReload2')
  request.r(i4355[12], i4355[13], 0, i4354, 'clipReload3')
  request.r(i4355[14], i4355[15], 0, i4354, 'clipGiantHit')
  return i4354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4357 = data
  request.r(i4357[0], i4357[1], 0, i4356, 'clip')
  i4356.playOnAwake = !!i4357[2]
  i4356.loop = !!i4357[3]
  i4356.time = i4357[4]
  i4356.volume = i4357[5]
  i4356.pitch = i4357[6]
  i4356.enabled = !!i4357[7]
  return i4356
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4358 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4359 = data
  request.r(i4359[0], i4359[1], 0, i4358, 'm_FirstSelected')
  i4358.m_sendNavigationEvents = !!i4359[2]
  i4358.m_DragThreshold = i4359[3]
  return i4358
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4360 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4361 = data
  i4360.m_HorizontalAxis = i4361[0]
  i4360.m_VerticalAxis = i4361[1]
  i4360.m_SubmitButton = i4361[2]
  i4360.m_CancelButton = i4361[3]
  i4360.m_InputActionsPerSecond = i4361[4]
  i4360.m_RepeatDelay = i4361[5]
  i4360.m_ForceModuleActive = !!i4361[6]
  return i4360
}

Deserializers["UnityEngine.EventSystems.BaseInput"] = function (request, data, root) {
  var i4362 = root || request.c( 'UnityEngine.EventSystems.BaseInput' )
  var i4363 = data
  return i4362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4365 = data
  i4364.ambientIntensity = i4365[0]
  i4364.reflectionIntensity = i4365[1]
  i4364.ambientMode = i4365[2]
  i4364.ambientLight = new pc.Color(i4365[3], i4365[4], i4365[5], i4365[6])
  i4364.ambientSkyColor = new pc.Color(i4365[7], i4365[8], i4365[9], i4365[10])
  i4364.ambientGroundColor = new pc.Color(i4365[11], i4365[12], i4365[13], i4365[14])
  i4364.ambientEquatorColor = new pc.Color(i4365[15], i4365[16], i4365[17], i4365[18])
  i4364.fogColor = new pc.Color(i4365[19], i4365[20], i4365[21], i4365[22])
  i4364.fogEndDistance = i4365[23]
  i4364.fogStartDistance = i4365[24]
  i4364.fogDensity = i4365[25]
  i4364.fog = !!i4365[26]
  request.r(i4365[27], i4365[28], 0, i4364, 'skybox')
  i4364.fogMode = i4365[29]
  var i4367 = i4365[30]
  var i4366 = []
  for(var i = 0; i < i4367.length; i += 1) {
    i4366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4367[i + 0]) );
  }
  i4364.lightmaps = i4366
  i4364.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4365[31], i4364.lightProbes)
  i4364.lightmapsMode = i4365[32]
  i4364.environmentLightingMode = i4365[33]
  i4364.ambientProbe = new pc.SphericalHarmonicsL2(i4365[34])
  request.r(i4365[35], i4365[36], 0, i4364, 'customReflection')
  request.r(i4365[37], i4365[38], 0, i4364, 'defaultReflection')
  i4364.defaultReflectionMode = i4365[39]
  i4364.defaultReflectionResolution = i4365[40]
  i4364.sunLightObjectId = i4365[41]
  i4364.pixelLightCount = i4365[42]
  i4364.defaultReflectionHDR = !!i4365[43]
  i4364.hasLightDataAsset = !!i4365[44]
  i4364.hasManualGenerate = !!i4365[45]
  return i4364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4371 = data
  request.r(i4371[0], i4371[1], 0, i4370, 'lightmapColor')
  request.r(i4371[2], i4371[3], 0, i4370, 'lightmapDirection')
  return i4370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4372 = root || new UnityEngine.LightProbes()
  var i4373 = data
  return i4372
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4378 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4379 = data
  i4378.useSafeMode = !!i4379[0]
  i4378.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4379[1], i4378.safeModeOptions)
  i4378.timeScale = i4379[2]
  i4378.useSmoothDeltaTime = !!i4379[3]
  i4378.maxSmoothUnscaledTime = i4379[4]
  i4378.rewindCallbackMode = i4379[5]
  i4378.showUnityEditorReport = !!i4379[6]
  i4378.logBehaviour = i4379[7]
  i4378.drawGizmos = !!i4379[8]
  i4378.defaultRecyclable = !!i4379[9]
  i4378.defaultAutoPlay = i4379[10]
  i4378.defaultUpdateType = i4379[11]
  i4378.defaultTimeScaleIndependent = !!i4379[12]
  i4378.defaultEaseType = i4379[13]
  i4378.defaultEaseOvershootOrAmplitude = i4379[14]
  i4378.defaultEasePeriod = i4379[15]
  i4378.defaultAutoKill = !!i4379[16]
  i4378.defaultLoopType = i4379[17]
  i4378.debugMode = !!i4379[18]
  i4378.debugStoreTargetId = !!i4379[19]
  i4378.showPreviewPanel = !!i4379[20]
  i4378.storeSettingsLocation = i4379[21]
  i4378.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4379[22], i4378.modules)
  i4378.createASMDEF = !!i4379[23]
  i4378.showPlayingTweens = !!i4379[24]
  i4378.showPausedTweens = !!i4379[25]
  return i4378
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4380 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4381 = data
  i4380.logBehaviour = i4381[0]
  i4380.nestedTweenFailureBehaviour = i4381[1]
  return i4380
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4382 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4383 = data
  i4382.showPanel = !!i4383[0]
  i4382.audioEnabled = !!i4383[1]
  i4382.physicsEnabled = !!i4383[2]
  i4382.physics2DEnabled = !!i4383[3]
  i4382.spriteEnabled = !!i4383[4]
  i4382.uiEnabled = !!i4383[5]
  i4382.textMeshProEnabled = !!i4383[6]
  i4382.tk2DEnabled = !!i4383[7]
  i4382.deAudioEnabled = !!i4383[8]
  i4382.deUnityExtendedEnabled = !!i4383[9]
  i4382.epoOutlineEnabled = !!i4383[10]
  return i4382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4385 = data
  var i4387 = i4385[0]
  var i4386 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i4387.length; i += 1) {
    i4386.add(i4387[i + 0]);
  }
  i4384.invalidShaderVariants = i4386
  i4384.name = i4385[1]
  i4384.guid = i4385[2]
  var i4389 = i4385[3]
  var i4388 = []
  for(var i = 0; i < i4389.length; i += 1) {
    i4388.push( i4389[i + 0] );
  }
  i4384.shaderDefinedKeywords = i4388
  var i4391 = i4385[4]
  var i4390 = []
  for(var i = 0; i < i4391.length; i += 1) {
    i4390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4391[i + 0]) );
  }
  i4384.passes = i4390
  var i4393 = i4385[5]
  var i4392 = []
  for(var i = 0; i < i4393.length; i += 1) {
    i4392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4393[i + 0]) );
  }
  i4384.defaultParameterValues = i4392
  request.r(i4385[6], i4385[7], 0, i4384, 'unityFallbackShader')
  i4384.readDepth = !!i4385[8]
  i4384.isCreatedByShaderGraph = !!i4385[9]
  return i4384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4400 = root || new pc.UnityShaderPass()
  var i4401 = data
  i4400.passType = i4401[0]
  i4400.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4401[1], i4400.zTest)
  i4400.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4401[2], i4400.zWrite)
  i4400.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4401[3], i4400.culling)
  i4400.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4401[4], i4400.blending)
  i4400.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4401[5], i4400.alphaBlending)
  i4400.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4401[6], i4400.colorWriteMask)
  i4400.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4401[7], i4400.offsetUnits)
  i4400.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4401[8], i4400.offsetFactor)
  i4400.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4401[9], i4400.stencilRef)
  i4400.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4401[10], i4400.stencilReadMask)
  i4400.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4401[11], i4400.stencilWriteMask)
  i4400.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4401[12], i4400.stencilOp)
  i4400.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4401[13], i4400.stencilOpFront)
  i4400.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4401[14], i4400.stencilOpBack)
  var i4403 = i4401[15]
  var i4402 = []
  for(var i = 0; i < i4403.length; i += 1) {
    i4402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4403[i + 0]) );
  }
  i4400.tags = i4402
  var i4405 = i4401[16]
  var i4404 = []
  for(var i = 0; i < i4405.length; i += 1) {
    i4404.push( i4405[i + 0] );
  }
  i4400.passDefinedKeywords = i4404
  var i4407 = i4401[17]
  var i4406 = []
  for(var i = 0; i < i4407.length; i += 1) {
    i4406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4407[i + 0]) );
  }
  i4400.variants = i4406
  i4400.readDepth = !!i4401[18]
  return i4400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4409 = data
  i4408.val = i4409[0]
  i4408.name = i4409[1]
  return i4408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4411 = data
  i4410.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4411[0], i4410.src)
  i4410.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4411[1], i4410.dst)
  i4410.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4411[2], i4410.op)
  return i4410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4413 = data
  i4412.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4413[0], i4412.pass)
  i4412.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4413[1], i4412.fail)
  i4412.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4413[2], i4412.zFail)
  i4412.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4413[3], i4412.comp)
  return i4412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4417 = data
  i4416.name = i4417[0]
  i4416.value = i4417[1]
  return i4416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4421 = data
  var i4423 = i4421[0]
  var i4422 = []
  for(var i = 0; i < i4423.length; i += 1) {
    i4422.push( i4423[i + 0] );
  }
  i4420.keywords = i4422
  i4420.vertexProgram = i4421[1]
  i4420.fragmentProgram = i4421[2]
  i4420.readDepth = !!i4421[3]
  return i4420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4427 = data
  i4426.name = i4427[0]
  i4426.type = i4427[1]
  i4426.value = new pc.Vec4( i4427[2], i4427[3], i4427[4], i4427[5] )
  i4426.textureValue = i4427[6]
  return i4426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4429 = data
  i4428.name = i4429[0]
  request.r(i4429[1], i4429[2], 0, i4428, 'texture')
  i4428.aabb = i4429[3]
  i4428.vertices = i4429[4]
  i4428.triangles = i4429[5]
  i4428.textureRect = UnityEngine.Rect.MinMaxRect(i4429[6], i4429[7], i4429[8], i4429[9])
  i4428.packedRect = UnityEngine.Rect.MinMaxRect(i4429[10], i4429[11], i4429[12], i4429[13])
  i4428.border = new pc.Vec4( i4429[14], i4429[15], i4429[16], i4429[17] )
  i4428.transparency = i4429[18]
  i4428.bounds = i4429[19]
  i4428.pixelsPerUnit = i4429[20]
  i4428.textureWidth = i4429[21]
  i4428.textureHeight = i4429[22]
  i4428.nativeSize = new pc.Vec2( i4429[23], i4429[24] )
  i4428.pivot = new pc.Vec2( i4429[25], i4429[26] )
  i4428.textureRectOffset = new pc.Vec2( i4429[27], i4429[28] )
  return i4428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4431 = data
  i4430.name = i4431[0]
  return i4430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4433 = data
  i4432.name = i4433[0]
  i4432.wrapMode = i4433[1]
  i4432.isLooping = !!i4433[2]
  i4432.length = i4433[3]
  var i4435 = i4433[4]
  var i4434 = []
  for(var i = 0; i < i4435.length; i += 1) {
    i4434.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4435[i + 0]) );
  }
  i4432.curves = i4434
  var i4437 = i4433[5]
  var i4436 = []
  for(var i = 0; i < i4437.length; i += 1) {
    i4436.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4437[i + 0]) );
  }
  i4432.events = i4436
  i4432.halfPrecision = !!i4433[6]
  return i4432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4441 = data
  i4440.path = i4441[0]
  i4440.componentType = i4441[1]
  i4440.property = i4441[2]
  i4440.keys = i4441[3]
  var i4443 = i4441[4]
  var i4442 = []
  for(var i = 0; i < i4443.length; i += 1) {
    i4442.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4443[i + 0]) );
  }
  i4440.objectReferenceKeys = i4442
  return i4440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4447 = data
  i4446.time = i4447[0]
  request.r(i4447[1], i4447[2], 0, i4446, 'value')
  return i4446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4451 = data
  i4450.functionName = i4451[0]
  i4450.floatParameter = i4451[1]
  i4450.intParameter = i4451[2]
  i4450.stringParameter = i4451[3]
  request.r(i4451[4], i4451[5], 0, i4450, 'objectReferenceParameter')
  i4450.time = i4451[6]
  return i4450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4453 = data
  i4452.name = i4453[0]
  var i4455 = i4453[1]
  var i4454 = []
  for(var i = 0; i < i4455.length; i += 1) {
    i4454.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4455[i + 0]) );
  }
  i4452.states = i4454
  var i4457 = i4453[2]
  var i4456 = []
  for(var i = 0; i < i4457.length; i += 1) {
    i4456.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4457[i + 0]) );
  }
  i4452.layers = i4456
  var i4459 = i4453[3]
  var i4458 = []
  for(var i = 0; i < i4459.length; i += 1) {
    i4458.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4459[i + 0]) );
  }
  i4452.parameters = i4458
  var i4461 = i4453[4]
  var i4460 = []
  for(var i = 0; i < i4461.length; i += 1) {
    i4460.push( i4461[i + 0] );
  }
  i4452.animationClips = i4460
  return i4452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4465 = data
  i4464.cycleOffset = i4465[0]
  i4464.cycleOffsetParameter = i4465[1]
  i4464.cycleOffsetParameterActive = !!i4465[2]
  i4464.mirror = !!i4465[3]
  i4464.mirrorParameter = i4465[4]
  i4464.mirrorParameterActive = !!i4465[5]
  i4464.motionId = i4465[6]
  i4464.nameHash = i4465[7]
  i4464.fullPathHash = i4465[8]
  i4464.speed = i4465[9]
  i4464.speedParameter = i4465[10]
  i4464.speedParameterActive = !!i4465[11]
  i4464.tag = i4465[12]
  i4464.name = i4465[13]
  i4464.writeDefaultValues = !!i4465[14]
  var i4467 = i4465[15]
  var i4466 = []
  for(var i = 0; i < i4467.length; i += 1) {
    i4466.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4467[i + 0]) );
  }
  i4464.transitions = i4466
  var i4469 = i4465[16]
  var i4468 = []
  for(var i = 0; i < i4469.length; i += 2) {
  request.r(i4469[i + 0], i4469[i + 1], 2, i4468, '')
  }
  i4464.behaviours = i4468
  return i4464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4473 = data
  i4472.fullPath = i4473[0]
  i4472.canTransitionToSelf = !!i4473[1]
  i4472.duration = i4473[2]
  i4472.exitTime = i4473[3]
  i4472.hasExitTime = !!i4473[4]
  i4472.hasFixedDuration = !!i4473[5]
  i4472.interruptionSource = i4473[6]
  i4472.offset = i4473[7]
  i4472.orderedInterruption = !!i4473[8]
  i4472.destinationStateNameHash = i4473[9]
  i4472.destinationStateMachineId = i4473[10]
  i4472.isExit = !!i4473[11]
  i4472.mute = !!i4473[12]
  i4472.solo = !!i4473[13]
  var i4475 = i4473[14]
  var i4474 = []
  for(var i = 0; i < i4475.length; i += 1) {
    i4474.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4475[i + 0]) );
  }
  i4472.conditions = i4474
  return i4472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4481 = data
  i4480.mode = i4481[0]
  i4480.parameter = i4481[1]
  i4480.threshold = i4481[2]
  return i4480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4485 = data
  i4484.blendingMode = i4485[0]
  i4484.defaultWeight = i4485[1]
  i4484.name = i4485[2]
  i4484.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4485[3], i4484.stateMachine)
  return i4484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4487 = data
  i4486.id = i4487[0]
  i4486.defaultStateNameHash = i4487[1]
  var i4489 = i4487[2]
  var i4488 = []
  for(var i = 0; i < i4489.length; i += 1) {
    i4488.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4489[i + 0]) );
  }
  i4486.entryTransitions = i4488
  var i4491 = i4487[3]
  var i4490 = []
  for(var i = 0; i < i4491.length; i += 1) {
    i4490.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4491[i + 0]) );
  }
  i4486.anyStateTransitions = i4490
  return i4486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4495 = data
  i4494.destinationStateNameHash = i4495[0]
  i4494.destinationStateMachineId = i4495[1]
  i4494.isExit = !!i4495[2]
  i4494.mute = !!i4495[3]
  i4494.solo = !!i4495[4]
  var i4497 = i4495[5]
  var i4496 = []
  for(var i = 0; i < i4497.length; i += 1) {
    i4496.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4497[i + 0]) );
  }
  i4494.conditions = i4496
  return i4494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4501 = data
  i4500.defaultBool = !!i4501[0]
  i4500.defaultFloat = i4501[1]
  i4500.defaultInt = i4501[2]
  i4500.name = i4501[3]
  i4500.nameHash = i4501[4]
  i4500.type = i4501[5]
  return i4500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4503 = data
  var i4505 = i4503[0]
  var i4504 = []
  for(var i = 0; i < i4505.length; i += 1) {
    i4504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4505[i + 0]) );
  }
  i4502.files = i4504
  i4502.componentToPrefabIds = i4503[1]
  return i4502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4509 = data
  i4508.path = i4509[0]
  request.r(i4509[1], i4509[2], 0, i4508, 'unityObject')
  return i4508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4511 = data
  var i4513 = i4511[0]
  var i4512 = []
  for(var i = 0; i < i4513.length; i += 1) {
    i4512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4513[i + 0]) );
  }
  i4510.scriptsExecutionOrder = i4512
  var i4515 = i4511[1]
  var i4514 = []
  for(var i = 0; i < i4515.length; i += 1) {
    i4514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4515[i + 0]) );
  }
  i4510.sortingLayers = i4514
  var i4517 = i4511[2]
  var i4516 = []
  for(var i = 0; i < i4517.length; i += 1) {
    i4516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4517[i + 0]) );
  }
  i4510.cullingLayers = i4516
  i4510.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4511[3], i4510.timeSettings)
  i4510.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4511[4], i4510.physicsSettings)
  i4510.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4511[5], i4510.physics2DSettings)
  i4510.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4511[6], i4510.qualitySettings)
  i4510.removeShadows = !!i4511[7]
  i4510.autoInstantiatePrefabs = !!i4511[8]
  i4510.enableAutoInstancing = !!i4511[9]
  i4510.lightmapEncodingQuality = i4511[10]
  i4510.desiredColorSpace = i4511[11]
  return i4510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4521 = data
  i4520.name = i4521[0]
  i4520.value = i4521[1]
  return i4520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4525 = data
  i4524.id = i4525[0]
  i4524.name = i4525[1]
  i4524.value = i4525[2]
  return i4524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4529 = data
  i4528.id = i4529[0]
  i4528.name = i4529[1]
  return i4528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4531 = data
  i4530.fixedDeltaTime = i4531[0]
  i4530.maximumDeltaTime = i4531[1]
  i4530.timeScale = i4531[2]
  i4530.maximumParticleTimestep = i4531[3]
  return i4530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4533 = data
  i4532.gravity = new pc.Vec3( i4533[0], i4533[1], i4533[2] )
  i4532.defaultSolverIterations = i4533[3]
  i4532.bounceThreshold = i4533[4]
  i4532.autoSyncTransforms = !!i4533[5]
  i4532.autoSimulation = !!i4533[6]
  var i4535 = i4533[7]
  var i4534 = []
  for(var i = 0; i < i4535.length; i += 1) {
    i4534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4535[i + 0]) );
  }
  i4532.collisionMatrix = i4534
  return i4532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4539 = data
  i4538.enabled = !!i4539[0]
  i4538.layerId = i4539[1]
  i4538.otherLayerId = i4539[2]
  return i4538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4541 = data
  request.r(i4541[0], i4541[1], 0, i4540, 'material')
  i4540.gravity = new pc.Vec2( i4541[2], i4541[3] )
  i4540.positionIterations = i4541[4]
  i4540.velocityIterations = i4541[5]
  i4540.velocityThreshold = i4541[6]
  i4540.maxLinearCorrection = i4541[7]
  i4540.maxAngularCorrection = i4541[8]
  i4540.maxTranslationSpeed = i4541[9]
  i4540.maxRotationSpeed = i4541[10]
  i4540.timeToSleep = i4541[11]
  i4540.linearSleepTolerance = i4541[12]
  i4540.angularSleepTolerance = i4541[13]
  i4540.defaultContactOffset = i4541[14]
  i4540.autoSimulation = !!i4541[15]
  i4540.queriesHitTriggers = !!i4541[16]
  i4540.queriesStartInColliders = !!i4541[17]
  i4540.callbacksOnDisable = !!i4541[18]
  i4540.reuseCollisionCallbacks = !!i4541[19]
  i4540.autoSyncTransforms = !!i4541[20]
  var i4543 = i4541[21]
  var i4542 = []
  for(var i = 0; i < i4543.length; i += 1) {
    i4542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4543[i + 0]) );
  }
  i4540.collisionMatrix = i4542
  return i4540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4547 = data
  i4546.enabled = !!i4547[0]
  i4546.layerId = i4547[1]
  i4546.otherLayerId = i4547[2]
  return i4546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4549 = data
  var i4551 = i4549[0]
  var i4550 = []
  for(var i = 0; i < i4551.length; i += 1) {
    i4550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4551[i + 0]) );
  }
  i4548.qualityLevels = i4550
  var i4553 = i4549[1]
  var i4552 = []
  for(var i = 0; i < i4553.length; i += 1) {
    i4552.push( i4553[i + 0] );
  }
  i4548.names = i4552
  i4548.shadows = i4549[2]
  i4548.anisotropicFiltering = i4549[3]
  i4548.antiAliasing = i4549[4]
  i4548.lodBias = i4549[5]
  i4548.shadowCascades = i4549[6]
  i4548.shadowDistance = i4549[7]
  i4548.shadowmaskMode = i4549[8]
  i4548.shadowProjection = i4549[9]
  i4548.shadowResolution = i4549[10]
  i4548.softParticles = !!i4549[11]
  i4548.softVegetation = !!i4549[12]
  i4548.activeColorSpace = i4549[13]
  i4548.desiredColorSpace = i4549[14]
  i4548.masterTextureLimit = i4549[15]
  i4548.maxQueuedFrames = i4549[16]
  i4548.particleRaycastBudget = i4549[17]
  i4548.pixelLightCount = i4549[18]
  i4548.realtimeReflectionProbes = !!i4549[19]
  i4548.shadowCascade2Split = i4549[20]
  i4548.shadowCascade4Split = new pc.Vec3( i4549[21], i4549[22], i4549[23] )
  i4548.streamingMipmapsActive = !!i4549[24]
  i4548.vSyncCount = i4549[25]
  i4548.asyncUploadBufferSize = i4549[26]
  i4548.asyncUploadTimeSlice = i4549[27]
  i4548.billboardsFaceCameraPosition = !!i4549[28]
  i4548.shadowNearPlaneOffset = i4549[29]
  i4548.streamingMipmapsMemoryBudget = i4549[30]
  i4548.maximumLODLevel = i4549[31]
  i4548.streamingMipmapsAddAllCameras = !!i4549[32]
  i4548.streamingMipmapsMaxLevelReduction = i4549[33]
  i4548.streamingMipmapsRenderersPerFrame = i4549[34]
  i4548.resolutionScalingFixedDPIFactor = i4549[35]
  i4548.streamingMipmapsMaxFileIORequests = i4549[36]
  i4548.currentQualityLevel = i4549[37]
  return i4548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4559 = data
  i4558.weight = i4559[0]
  i4558.vertices = i4559[1]
  i4558.normals = i4559[2]
  i4558.tangents = i4559[3]
  return i4558
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"time":4,"volume":5,"pitch":6,"enabled":7},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"defaultParameterValues":5,"unityFallbackShader":6,"readDepth":8,"isCreatedByShaderGraph":9},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"passDefinedKeywords":16,"variants":17,"readDepth":18},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2,"readDepth":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[36],"62":[16],"63":[6],"64":[6],"65":[6],"66":[6],"67":[6],"68":[6],"69":[6],"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[71],"78":[71],"79":[71],"80":[71],"81":[71],"82":[71],"83":[71],"84":[16],"85":[10],"86":[87],"88":[87],"22":[21],"41":[25,21],"89":[21],"90":[25,21],"91":[10],"92":[25,21],"93":[21],"94":[10,21],"95":[21,25],"96":[21],"97":[21],"98":[21],"38":[22],"26":[25,21],"99":[21],"24":[22],"100":[21],"101":[21],"102":[21],"103":[21],"104":[21],"105":[21],"106":[21],"39":[21],"107":[21],"108":[25,21],"109":[21],"110":[21],"111":[21],"112":[21],"113":[25,21],"114":[21],"115":[49],"116":[49],"50":[49],"117":[49],"118":[16],"119":[16]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","BulletController","UnityEngine.ParticleSystem","UnityEngine.Rigidbody","UnityEngine.CapsuleCollider","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","BulletRotation","UnityEngine.TrailRenderer","UnityEngine.ParticleSystemRenderer","AutoDestroy","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","BaseGun","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","RotateObject","UnityEngine.Light","UnityEngine.MeshCollider","BuildingController","UnityEngine.BoxCollider","BaseEnemy","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SkinnedMeshRenderer","UnityEngine.SpriteRenderer","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Mask","ScopeController","CutOutMaskUI","ControllerOnPointer","UnityEngine.Animation","UnityEngine.AnimationClip","GameManager1","SoundController","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.BaseInput","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2020.3.19f1";

Deserializers.productName = "GiantWanted";

Deserializers.lunaInitializationTime = "03/28/2022 09:27:37";

Deserializers.lunaVersion = "3.4.0";

Deserializers.lunaSHA = "384276c727fc2a748cc56666369738a4cdc2fe8a";

Deserializers.packagesInfo = "com.unity.collab-proxy: 1.9.0,com.unity.ide.rider: 2.0.7,com.unity.ide.visualstudio: 2.0.11,com.unity.ide.vscode: 1.2.4,com.unity.test-framework: 1.1.29,com.unity.textmeshpro: 3.0.6,com.unity.timeline: 1.4.8,com.unity.ugui: 1.0.0,uk.lunalabs.luna: file:E:/LunaDownload/3.4.0/scripts,com.unity.modules.ai: 1.0.0,com.unity.modules.androidjni: 1.0.0,com.unity.modules.animation: 1.0.0,com.unity.modules.assetbundle: 1.0.0,com.unity.modules.audio: 1.0.0,com.unity.modules.cloth: 1.0.0,com.unity.modules.director: 1.0.0,com.unity.modules.imageconversion: 1.0.0,com.unity.modules.imgui: 1.0.0,com.unity.modules.jsonserialize: 1.0.0,com.unity.modules.particlesystem: 1.0.0,com.unity.modules.physics: 1.0.0,com.unity.modules.physics2d: 1.0.0,com.unity.modules.screencapture: 1.0.0,com.unity.modules.terrain: 1.0.0,com.unity.modules.terrainphysics: 1.0.0,com.unity.modules.tilemap: 1.0.0,com.unity.modules.ui: 1.0.0,com.unity.modules.uielements: 1.0.0,com.unity.modules.umbra: 1.0.0,com.unity.modules.unityanalytics: 1.0.0,com.unity.modules.unitywebrequest: 1.0.0,com.unity.modules.unitywebrequestassetbundle: 1.0.0,com.unity.modules.unitywebrequestaudio: 1.0.0,com.unity.modules.unitywebrequesttexture: 1.0.0,com.unity.modules.unitywebrequestwww: 1.0.0,com.unity.modules.vehicles: 1.0.0,com.unity.modules.video: 1.0.0,com.unity.modules.vr: 1.0.0,com.unity.modules.wind: 1.0.0,com.unity.modules.xr: 1.0.0";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.GiantWanted";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "bf6aeedf-f0d5-472e-8955-78b190a453e1";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

